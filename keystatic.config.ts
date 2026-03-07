import { config, fields, collection } from "@keystatic/core";

/**
 * Detect whether to use GitHub storage.
 *
 * keystatic.config.ts is imported by both server AND client code (the
 * "use client" KeystaticPage component). Server-only env vars like
 * KEYSTATIC_GITHUB_CLIENT_ID are undefined in the browser bundle.
 *
 * We use a dedicated NEXT_PUBLIC_ env var to control this explicitly.
 * Set NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND=github on the Vercel project
 * that has the GitHub OAuth secrets configured. If unset, falls back
 * to local mode (works for local dev and projects without secrets).
 */
const useGitHub =
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === "github";

const storage = useGitHub
  ? {
    kind: "github" as const,
    repo: {
      owner: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_OWNER ?? "zamadshakil",
      name:
        process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO ??
        "al-barak-landing-page",
    },
  }
  : { kind: "local" as const };

export default config({
  storage,

  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },

      schema: {
        title: fields.slug({ name: { label: "Title" } }),

        date: fields.date({
          label: "Publish Date",
          validation: { isRequired: true },
        }),

        excerpt: fields.text({
          label: "Excerpt",
          description: "A short summary shown on the blog index cards.",
          multiline: true,
          validation: { isRequired: true },
        }),

        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
          description: "Upload a cover image for this post.",
        }),

        content: fields.markdoc({
          label: "Content",
          description: "Write the full blog post here.",
        }),
      },
    }),
  },
});
