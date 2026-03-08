import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Insights &amp; Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            The Al&nbsp;Barzak Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Practical guidance on maintenance, engineering best-practices, and
            the latest from the UAE technical-services industry.
          </p>
        </div>
      </section>

      {/* ── Post grid ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Cover image placeholder */}
                <div className="relative h-52 w-full bg-muted overflow-hidden">
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-5xl font-serif font-bold text-muted-foreground/20 select-none">
                        AB
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-AE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
