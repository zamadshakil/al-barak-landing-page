import keystaticConfig from "@/keystatic.config";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID!;
const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!;
const secret = process.env.KEYSTATIC_SECRET!;

/* ------------------------------------------------------------------ */
/*  Custom OAuth handler that supports BOTH expiring and non-expiring  */
/*  GitHub tokens. Keystatic's built-in makeRouteHandler only supports */
/*  expiring tokens — this handler works either way.                   */
/* ------------------------------------------------------------------ */

// ── Cookie helper (no external dependency) ───────────────────────────
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

const isProd = process.env.NODE_ENV === "production";

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
  // 1 year fallback for non-expiring tokens
  const maxAge = expiresIn ?? 60 * 60 * 24 * 365;
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

// ── OAuth Callback ───────────────────────────────────────────────────
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

  // Set the access token cookie and redirect to Keystatic
  const cookies = makeTokenCookies(tokenData.access_token, tokenData.expires_in);
  const res = NextResponse.redirect(new URL("/keystatic", url.origin), 307);
  cookies.forEach((c) => res.headers.append("Set-Cookie", c));
  return res;
}

// ── Login Redirect ───────────────────────────────────────────────────
function handleLogin(req: NextRequest) {
  const reqUrl = new URL(req.url);
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set(
    "redirect_uri",
    `${reqUrl.origin}/api/keystatic/github/oauth/callback`
  );
  return NextResponse.redirect(authUrl.toString(), 307);
}

// ── Logout ───────────────────────────────────────────────────────────
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

// ── Refresh Token (returns 401 — non-expiring tokens don't refresh) ─
function handleRefreshToken() {
  // Non-expiring tokens don't need refreshing.
  // If Keystatic asks, just say "no refresh needed" by returning 401.
  // It will fall back to using the existing access token cookie.
  return NextResponse.json({ error: "Token refresh not supported" }, { status: 401 });
}

// ── Main Router ──────────────────────────────────────────────────────
function getPath(req: NextRequest) {
  return new URL(req.url).pathname
    .replace(/^\/api\/keystatic\/?/, "")
    .split("/")
    .filter(Boolean)
    .join("/");
}

export async function GET(req: NextRequest) {
  const path = getPath(req);
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
    default:
      return new NextResponse("Not Found", { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  const path = getPath(req);
  switch (path) {
    case "github/refresh-token":
      return handleRefreshToken();
    default:
      return new NextResponse("Not Found", { status: 404 });
  }
}
