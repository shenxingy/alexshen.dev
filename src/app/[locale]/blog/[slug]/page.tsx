import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getAllPosts, getPostBySlug, formatDate, extractHeadings } from "@/lib/blog";
import { AnimatedContainer } from "@/components/animated-container";
import { MDXRemote } from "@/components/mdx-remote";
import { TableOfContents } from "@/components/toc";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const enPosts = getAllPosts("en");
  const zhPosts = getAllPosts("zh");
  const slugs = new Set([...enPosts.map((p) => p.slug), ...zhPosts.map((p) => p.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);

  return (
    <>
      <TableOfContents headings={headings} />
      <AnimatedContainer>
      <article className="pt-12 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-text-tertiary">
            {formatDate(post.date, "long", locale)}
          </time>
        </header>
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </AnimatedContainer>
    </>
  );
}
