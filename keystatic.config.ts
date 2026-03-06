import { config, fields, collection } from "@keystatic/core";

/**
 * Use GitHub storage only when ALL OAuth credentials are present.
 * This way `next build` works locally (falls back to local mode)
 * and only switches to GitHub mode on the deployed server where
 * the env vars are set.
 */
const useGitHub = !!(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  process.env.KEYSTATIC_SECRET
);

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
