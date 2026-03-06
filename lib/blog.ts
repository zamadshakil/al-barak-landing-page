import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

/**
 * Discover every post slug. Supports three layouts:
 *  1. Keystatic folder: content/blog/<slug>/index.mdoc
 *  2. Keystatic flat:   content/blog/<slug>.mdoc
 *  3. Legacy flat file: content/blog/<slug>.md
 */
function discoverSlugs(): string[] {
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const slugs = new Set<string>();

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Keystatic folder layout — look for index.mdoc
      const mdocPath = path.join(postsDirectory, entry.name, "index.mdoc");
      if (fs.existsSync(mdocPath)) {
        slugs.add(entry.name);
      }
    } else if (entry.name.endsWith(".mdoc")) {
      // Keystatic flat .mdoc file
      slugs.add(entry.name.replace(/\.mdoc$/, ""));
    } else if (entry.name.endsWith(".md")) {
      // Legacy flat .md file
      slugs.add(entry.name.replace(/\.md$/, ""));
    }
  }

  return Array.from(slugs);
}

/** Slug must be lowercase alphanumeric with hyphens only. */
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validateSlug(slug: string): void {
  if (!SLUG_REGEX.test(slug)) {
    throw new Error(`Invalid slug: ${slug}`);
  }
}

/**
 * Read the raw file contents + frontmatter for a slug.
 */
function readPostFile(slug: string): { data: Record<string, any>; content: string } {
  validateSlug(slug);

  // 1. Keystatic folder layout
  const folderMdoc = path.join(postsDirectory, slug, "index.mdoc");
  if (fs.existsSync(folderMdoc)) {
    return matter(fs.readFileSync(folderMdoc, "utf8"));
  }

  // 2. Keystatic flat .mdoc file
  const flatMdoc = path.join(postsDirectory, `${slug}.mdoc`);
  if (fs.existsSync(flatMdoc)) {
    return matter(fs.readFileSync(flatMdoc, "utf8"));
  }

  // 3. Legacy flat .md file
  const flatMd = path.join(postsDirectory, `${slug}.md`);
  return matter(fs.readFileSync(flatMd, "utf8"));
}

/**
 * Return metadata for every blog post, sorted newest-first.
 */
export function getAllPosts(): PostMeta[] {
  const slugs = discoverSlugs();

  const posts: PostMeta[] = slugs.map((slug) => {
    const { data } = readPostFile(slug);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      coverImage: data.coverImage ?? "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Return a single post's metadata **and** its rendered HTML.
 */
export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(slug);

  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    contentHtml,
  };
}
