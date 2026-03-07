import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

/* ── Static params for SSG of every known slug ── */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/* ── Dynamic SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: `${post.title} | Al Barzak Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
  };
}

/* ── Page component ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <>
      {/* ── Back link + header ── */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-AE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── Cover image ── */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-2 mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl shadow-lg object-cover max-h-[480px]"
          />
        </div>
      )}

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <div
          className="prose prose-lg prose-neutral max-w-none
            prose-headings:font-serif prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-li:text-muted-foreground
            prose-blockquote:border-primary/40 prose-blockquote:text-muted-foreground
            prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </>
  );
}
