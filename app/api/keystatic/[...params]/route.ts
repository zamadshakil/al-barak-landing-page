import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";

// Prevent Next.js from trying to statically collect this route at build time
export const dynamic = "force-dynamic";

/**
 * Only pass GitHub OAuth credentials when ALL three env vars are set.
 * This prevents the "Missing required config" error during build when
 * the GitHub OAuth app hasn't been configured yet (e.g. on a secondary
 * Vercel project linked to the same repo).
 */
const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
const secret = process.env.KEYSTATIC_SECRET;

const hasFullGitHubConfig = !!(clientId && clientSecret && secret);

export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
  ...(hasFullGitHubConfig
    ? { clientId, clientSecret, secret }
    : {}),
});
