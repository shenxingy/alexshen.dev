import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { projects, projectCategories } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { AnimatedContainer } from "@/components/animated-container";
import { TableOfContents } from "@/components/toc";

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

  const headings = projectCategories.map((cat) => ({
    text: locale === "zh" ? cat.labelZh : cat.label,
    id: cat.id,
  }));

  return (
    <>
      <TableOfContents headings={headings} />
      <AnimatedContainer>
        <section className="pt-12 pb-8">
          <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
          <p className="text-text-secondary">{t("description")}</p>
        </section>

        {projectCategories.map((cat) => {
          const catProjects = projects.filter((p) => p.category === cat.id);
          if (catProjects.length === 0) return null;
          return (
            <section key={cat.id} id={cat.id} className="mb-10 scroll-mt-20">
              <h2 className="text-xs font-medium tracking-widest uppercase text-text-secondary mb-3">
                {locale === "zh" ? cat.labelZh : cat.label}
              </h2>
              <div className="space-y-1">
                {catProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} expanded />
                ))}
              </div>
            </section>
          );
        })}
      </AnimatedContainer>
    </>
  );
}
