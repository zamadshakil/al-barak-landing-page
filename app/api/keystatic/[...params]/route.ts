import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "@/keystatic.config";

/**
 * Only pass GitHub OAuth credentials when ALL three env vars are set.
 * This prevents the "Missing required config" error during build when
 * the GitHub OAuth app hasn't been configured yet.
 */
const hasFullGitHubConfig = !!(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  process.env.KEYSTATIC_SECRET
);

export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
  ...(hasFullGitHubConfig
    ? {
        clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
        clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
        secret: process.env.KEYSTATIC_SECRET,
      }
    : {}),
});
