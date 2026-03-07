import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";
import { NextRequest, NextResponse } from "next/server";

// Prevent Next.js from trying to statically collect this route at build time
export const dynamic = "force-dynamic";

const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID!;
const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!;
const secret = process.env.KEYSTATIC_SECRET!;

// Log at module init
console.log("[keystatic-route] clientId:", clientId?.slice(0, 6) + "...");
console.log("[keystatic-route] clientSecret length:", clientSecret?.length);
console.log("[keystatic-route] secret length:", secret?.length);

/**
 * Custom OAuth callback that logs GitHub's actual response
 * before delegating to Keystatic's handler.
 * This is TEMPORARY for debugging.
 */
async function debugOAuthCallback(req: NextRequest): Promise<NextResponse | null> {
  const url = new URL(req.url);
  const pathSegments = url.pathname.replace(/^\/api\/keystatic\/?/, "").split("/");
  const joined = pathSegments.join("/");

  // Only intercept the callback route for debugging
  if (joined !== "github/oauth/callback") {
    return null; // Let Keystatic handle it
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");

  console.log("[oauth-debug] Callback received");
  console.log("[oauth-debug] code:", code?.slice(0, 6) + "...");
  console.log("[oauth-debug] error:", error);
  console.log("[oauth-debug] errorDescription:", errorDescription);

  // Replicate the exact token exchange that Keystatic does
  const tokenUrl = new URL("https://github.com/login/oauth/access_token");
  tokenUrl.searchParams.set("client_id", clientId);
  tokenUrl.searchParams.set("client_secret", clientSecret);
  tokenUrl.searchParams.set("code", code || "");

  console.log("[oauth-debug] Exchanging code at:", tokenUrl.origin + tokenUrl.pathname);
  console.log("[oauth-debug] client_id sent:", tokenUrl.searchParams.get("client_id"));

  const tokenRes = await fetch(tokenUrl, {
    method: "POST",
    headers: { Accept: "application/json" },
  });

  const responseText = await tokenRes.text();
  console.log("[oauth-debug] GitHub response status:", tokenRes.status);
  console.log("[oauth-debug] GitHub response body:", responseText);

  // Don't actually handle it — just log and return null so we fall through
  // Actually, we consumed the response, so let's return the error info
  // for diagnostic purposes
  return NextResponse.json(
    {
      debug: true,
      githubStatus: tokenRes.status,
      githubResponse: JSON.parse(responseText),
      note: "This is temporary debug output. Remove after fixing OAuth.",
    },
    { status: 200 }
  );
}

// Keystatic's default handler
const keystatic = makeRouteHandler({
  config: keystaticConfig,
  clientId,
  clientSecret,
  secret,
});

// Wrap the handlers to add debug logging
export async function GET(req: NextRequest, context: any) {
  const debugResult = await debugOAuthCallback(req);
  if (debugResult) return debugResult;
  return keystatic.GET(req, context);
}

export async function POST(req: NextRequest, context: any) {
  return keystatic.POST(req, context);
}
