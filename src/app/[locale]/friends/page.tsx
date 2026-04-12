import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { friends } from "@/lib/constants";
import { AnimatedContainer } from "@/components/animated-container";
import { ExternalLinkIcon } from "@/components/external-link-icon";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "friends" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function FriendsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("friends");

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
        <p className="text-text-secondary">{t("description")}</p>
      </section>

      <section className="py-4">
        {friends.length === 0 ? (
          <p className="text-text-tertiary text-sm">{t("empty")}</p>
        ) : (
          <div className="space-y-1">
            {friends.map((friend) => (
              <a
                key={friend.url}
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block -mx-3 px-3 py-3 rounded-lg hover:bg-bg-secondary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-text-primary group-hover:text-accent transition-colors">
                    {friend.name}
                  </span>
                  <ExternalLinkIcon className="text-text-tertiary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-sm text-text-secondary mt-0.5">
                  {locale === "zh" && friend.descriptionZh
                    ? friend.descriptionZh
                    : friend.description}
                </p>
              </a>
            ))}
          </div>
        )}
      </section>
    </AnimatedContainer>
  );
}
