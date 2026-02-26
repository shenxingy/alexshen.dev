import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/lib/constants";
import { AnimatedContainer } from "@/components/animated-container";
import { ExternalLinkIcon } from "@/components/external-link-icon";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description:
      locale === "zh"
        ? "申昕阳——工程师，构建者，折腾爱好者。"
        : "About Alex Shen — engineer, builder, tinkerer.",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-6">{t("title")}</h1>

        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            {locale === "zh" ? (
              t("bio1")
            ) : (
              <>
                I&apos;m Alex — a Founding Engineer at{" "}
                <a
                  href="https://scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary underline underline-offset-2 hover:text-accent transition-colors"
                >
                  Scam AI
                </a>
                , where I build ML systems and full-stack products to combat
                online fraud. I work across the stack — from training models and
                designing data pipelines to shipping user-facing features.
              </>
            )}
          </p>
          <p>{t("bio2")}</p>
          <p>{t("bio3")}</p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          {t("experience")}
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Founding Engineer</h3>
              <span className="text-sm text-text-tertiary">2024 — Present</span>
            </div>
            <p className="text-text-secondary text-sm">
              Scam AI (Reality Defender)
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          {t("education")}
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Duke University</h3>
              <span className="text-sm text-text-tertiary">2020 — 2024</span>
            </div>
            <p className="text-text-secondary text-sm">B.S. Computer Science</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          {t("connect")}
        </h2>
        <div className="space-y-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
            <ExternalLinkIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn
            <ExternalLinkIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            {siteConfig.email}
            <ExternalLinkIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </AnimatedContainer>
  );
}
