import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { AnimatedContainer } from "@/components/animated-container";
import { MDXRemote } from "@/components/mdx-remote";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <AnimatedContainer>
      <article className="pt-12 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
          <time className="text-sm text-text-tertiary">
            {formatDate(post.date, "long", locale)}
          </time>
        </header>
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </AnimatedContainer>
  );
}
