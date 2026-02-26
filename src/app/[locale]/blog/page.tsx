import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getAllPosts, formatDate } from "@/lib/blog";
import { AnimatedContainer } from "@/components/animated-container";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("blog");
  const posts = getAllPosts();

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
        <p className="text-text-secondary">{t("description")}</p>
      </section>

      {posts.length === 0 ? (
        <p className="text-text-tertiary py-8">{t("noPosts")}</p>
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
                  {formatDate(post.date, "short", locale)}
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
