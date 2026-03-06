import { NextRequest, NextResponse } from "next/server";

/**
 * Protect the Keystatic CMS admin panel and API with HTTP Basic Auth.
 *
 * Set these environment variables (in .env.local for dev, or in your host):
 *   KEYSTATIC_ADMIN_USER=admin
 *   KEYSTATIC_ADMIN_PASSWORD=<a-strong-random-password>
 *
 * Without these env vars the middleware blocks all access to /keystatic.
 */

const PROTECTED = ["/keystatic", "/api/keystatic"];

function isProtectedPath(pathname: string): boolean {
  return PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const expectedUser = process.env.KEYSTATIC_ADMIN_USER;
  const expectedPass = process.env.KEYSTATIC_ADMIN_PASSWORD;

  // If credentials aren't configured, block access entirely in production
  if (!expectedUser || !expectedPass) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Forbidden – CMS credentials not configured.", {
        status: 403,
      });
    }
    // In development, allow access without auth for convenience
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
