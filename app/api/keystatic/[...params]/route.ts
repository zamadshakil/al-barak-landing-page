import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID!;
const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!;
const secret = process.env.KEYSTATIC_SECRET!;

/* ------------------------------------------------------------------ */
/*  Hybrid handler:                                                    */
/*  - Custom OAuth routes (login, callback, logout, refresh)           */
/*    → works with non-expiring GitHub tokens                          */
/*  - Everything else (content API)                                    */
/*    → delegated to Keystatic's built-in makeRouteHandler             */
/* ------------------------------------------------------------------ */

// ── Keystatic's built-in handler (for content API routes) ────────────
const keystatic = makeRouteHandler({
  config: keystaticConfig,
  clientId,
  clientSecret,
  secret,
});

// ── Cookie helpers ───────────────────────────────────────────────────
const isProd = process.env.NODE_ENV === "production";

function serializeCookie(
  name: string,
  value: string,
  opts: { maxAge?: number; secure?: boolean; path?: string; httpOnly?: boolean; sameSite?: string }
) {
  let str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (opts.maxAge !== undefined) str += `; Max-Age=${opts.maxAge}`;
  if (opts.secure) str += "; Secure";
  if (opts.httpOnly) str += "; HttpOnly";
  if (opts.path) str += `; Path=${opts.path}`;
  if (opts.sameSite) str += `; SameSite=${opts.sameSite}`;
  return str;
}

function parseCookies(header: string | null): Record<string, string> {
  if (!header) return {};
  const result: Record<string, string> = {};
  header.split(";").forEach((part) => {
    const [key, ...rest] = part.trim().split("=");
    if (key) result[decodeURIComponent(key)] = decodeURIComponent(rest.join("="));
  });
  return result;
}

// ── Token Exchange ───────────────────────────────────────────────────
async function exchangeCodeForToken(code: string) {
  const url = new URL("https://github.com/login/oauth/access_token");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("client_secret", clientSecret);
  url.searchParams.set("code", code);

  const res = await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) return null;
  return res.json();
}

// ── Cookie builders ──────────────────────────────────────────────────
function makeTokenCookies(accessToken: string, expiresIn?: number): string[] {
  const maxAge = expiresIn ?? 60 * 60 * 24 * 365; // 1 year for non-expiring tokens
  return [
    serializeCookie("keystatic-gh-access-token", accessToken, {
      sameSite: "Lax",
      secure: isProd,
      maxAge,
      path: "/",
    }),
  ];
}

function expireCookies(): string[] {
  return [
    serializeCookie("keystatic-gh-access-token", "", { maxAge: 0, secure: isProd, sameSite: "Lax", path: "/" }),
    serializeCookie("keystatic-gh-refresh-token", "", { maxAge: 0, secure: isProd, sameSite: "Lax", path: "/" }),
  ];
}

// ── Custom OAuth Routes ──────────────────────────────────────────────
async function handleOAuthCallback(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const errorDesc = url.searchParams.get("error_description");

  if (errorDesc) {
    return new NextResponse(`GitHub OAuth error: ${errorDesc}`, { status: 400 });
  }
  if (!code) {
    return new NextResponse("Bad Request: missing code", { status: 400 });
  }

  const tokenData = await exchangeCodeForToken(code);
  if (!tokenData || !tokenData.access_token) {
    console.error("[keystatic-oauth] Token exchange failed:", tokenData);
    return new NextResponse("Authorization failed", { status: 401 });
  }

  const cookies = makeTokenCookies(tokenData.access_token, tokenData.expires_in);
  const res = NextResponse.redirect(new URL("/keystatic", url.origin), 307);
  cookies.forEach((c) => res.headers.append("Set-Cookie", c));
  return res;
}

function handleLogin(req: NextRequest) {
  const reqUrl = new URL(req.url);
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set(
    "redirect_uri",
    `${reqUrl.origin}/api/keystatic/github/oauth/callback`
  );
  // Request repo scope so Keystatic can read/write content
  authUrl.searchParams.set("scope", "repo");
  return NextResponse.redirect(authUrl.toString(), 307);
}

async function handleLogout(req: NextRequest) {
  const cookies = parseCookies(req.headers.get("cookie"));
  const accessToken = cookies["keystatic-gh-access-token"];

  if (accessToken) {
    await fetch(`https://api.github.com/applications/${clientId}/token`, {
      method: "DELETE",
      headers: {
        Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
      },
      body: JSON.stringify({ access_token: accessToken }),
    }).catch(() => { });
  }

  const url = new URL(req.url);
  const res = NextResponse.redirect(new URL("/keystatic", url.origin), 307);
  expireCookies().forEach((c) => res.headers.append("Set-Cookie", c));
  return res;
}

function handleRefreshToken() {
  // Non-expiring tokens don't need refreshing.
  return NextResponse.json({ error: "Token refresh not supported" }, { status: 401 });
}

// ── Path helper ──────────────────────────────────────────────────────
function getPath(req: NextRequest) {
  return new URL(req.url).pathname
    .replace(/^\/api\/keystatic\/?/, "")
    .split("/")
    .filter(Boolean)
    .join("/");
}

// OAuth routes we handle ourselves
const CUSTOM_ROUTES = new Set([
  "github/oauth/callback",
  "github/login",
  "github/logout",
  "github/refresh-token",
  "github/repo-not-found",
]);

// ── Main Exports ─────────────────────────────────────────────────────
export async function GET(req: NextRequest, context: any) {
  const path = getPath(req);

  // Handle OAuth routes ourselves (bypasses Keystatic's token validation)
  if (CUSTOM_ROUTES.has(path)) {
    switch (path) {
      case "github/oauth/callback":
        return handleOAuthCallback(req);
      case "github/login":
        return handleLogin(req);
      case "github/logout":
        return handleLogout(req);
      case "github/refresh-token":
        return handleRefreshToken();
      case "github/repo-not-found":
        return handleLogin(req);
    }
  }

  // Everything else → Keystatic's built-in handler (content API)
  return keystatic.GET(req, context);
}

export async function POST(req: NextRequest, context: any) {
  const path = getPath(req);

  if (path === "github/refresh-token") {
    return handleRefreshToken();
  }

  // Everything else → Keystatic's built-in handler
  return keystatic.POST(req, context);
}
