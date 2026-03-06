import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

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
