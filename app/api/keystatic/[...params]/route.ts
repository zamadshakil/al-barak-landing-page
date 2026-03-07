import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";

// Prevent Next.js from trying to statically collect this route at build time
export const dynamic = "force-dynamic";

const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
const secret = process.env.KEYSTATIC_SECRET;

const hasFullGitHubConfig = !!(clientId && clientSecret && secret);

// Temporary debug logging — check Vercel Function Logs
console.log("[keystatic-route] hasFullGitHubConfig:", hasFullGitHubConfig);
console.log("[keystatic-route] clientId present:", !!clientId, "length:", clientId?.length);
console.log("[keystatic-route] clientSecret present:", !!clientSecret, "length:", clientSecret?.length);
console.log("[keystatic-route] secret present:", !!secret, "length:", secret?.length);
console.log("[keystatic-route] storage kind:", process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND);

export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
  ...(hasFullGitHubConfig
    ? { clientId, clientSecret, secret }
    : {}),
});
