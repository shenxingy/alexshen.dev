import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { projects } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { AnimatedContainer } from "@/components/animated-container";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
        <p className="text-text-secondary">{t("description")}</p>
      </section>
      <div className="space-y-1">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} expanded />
        ))}
      </div>
    </AnimatedContainer>
  );
}
