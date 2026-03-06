import { NextRequest, NextResponse } from "next/server";

/**
 * Protect the Keystatic CMS admin panel and API.
 *
 * Authentication strategy:
 *   - GitHub storage mode (production with OAuth): Keystatic handles auth
 *     via GitHub OAuth. The middleware lets requests through so the OAuth
 *     flow can work.
 *   - Local / fallback mode: HTTP Basic Auth using env vars
 *     KEYSTATIC_ADMIN_USER and KEYSTATIC_ADMIN_PASSWORD.
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

  // ── Fallback: HTTP Basic Auth ──────────────────────────────────────
  const expectedUser = process.env.KEYSTATIC_ADMIN_USER;
  const expectedPass = process.env.KEYSTATIC_ADMIN_PASSWORD;

  // If no credentials at all are configured, block in prod, allow in dev
  if (!expectedUser || !expectedPass) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Forbidden – CMS credentials not configured.", {
        status: 403,
      });
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

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Keystatic CMS", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/keystatic/:path*", "/api/keystatic/:path*"],
};
