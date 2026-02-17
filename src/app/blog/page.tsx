import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { AnimatedContainer } from "@/components/animated-container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, learnings, and things I find interesting.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-2">Blog</h1>
        <p className="text-text-secondary">
          Thoughts, learnings, and things I find interesting.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-text-tertiary py-8">No posts yet. Stay tuned.</p>
      ) : (
        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block -mx-3 px-3 py-4 rounded-lg hover:bg-bg-secondary transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </span>
                <time className="text-sm text-text-tertiary whitespace-nowrap">
                  {formatDate(post.date)}
                </time>
              </div>
              {post.excerpt && (
                <p className="text-sm text-text-secondary mt-1">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </AnimatedContainer>
  );
}
