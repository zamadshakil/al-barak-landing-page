import { NextRequest, NextResponse } from "next/server";

/**
 * Next.js 16 proxy (replaces the deprecated middleware convention).
 *
 * Authentication strategy:
 *   - GitHub storage mode (production with OAuth): Keystatic handles auth
 *     via GitHub OAuth. The proxy lets all requests through.
 *   - Local / fallback mode: HTTP Basic Auth using env vars
 *     KEYSTATIC_ADMIN_USER and KEYSTATIC_ADMIN_PASSWORD.
 *
 * IMPORTANT: proxy.ts cannot return full response bodies in Next.js 16.
 * We use redirects and NextResponse.json() for error cases instead.
 */

const PROTECTED = ["/keystatic", "/api/keystatic"];

function isProtectedPath(pathname: string): boolean {
    return PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (!isProtectedPath(pathname)) {
        return NextResponse.next();
    }

    // When GitHub OAuth is configured, Keystatic handles its own auth.
    // Let all /keystatic requests pass through to the OAuth flow.
    const hasGitHubOAuth = !!(
        process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
    );

    if (hasGitHubOAuth) {
        return NextResponse.next();
    }

    // ── Fallback: HTTP Basic Auth (local dev / non-GitHub deployments) ──
    const expectedUser = process.env.KEYSTATIC_ADMIN_USER;
    const expectedPass = process.env.KEYSTATIC_ADMIN_PASSWORD;

    // If no credentials at all are configured, allow in dev only
    if (!expectedUser || !expectedPass) {
        if (process.env.NODE_ENV === "production") {
            return NextResponse.json(
                { error: "CMS credentials not configured" },
                { status: 403 }
            );
        }
        return NextResponse.next();
    }

    const authHeader = request.headers.get("authorization");

    if (authHeader) {
        const [scheme, encoded] = authHeader.split(" ");
        if (scheme === "Basic" && encoded) {
            const decoded = atob(encoded);
            const [user, pass] = decoded.split(":");
            if (user === expectedUser && pass === expectedPass) {
                return NextResponse.next();
            }
        }
    }

    return NextResponse.json(
        { error: "Authentication required" },
        {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Keystatic CMS", charset="UTF-8"',
            },
        }
    );
}

export const config = {
    matcher: ["/keystatic/:path*", "/api/keystatic/:path*"],
};
