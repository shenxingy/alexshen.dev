import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { projects, projectCategories } from "@/lib/constants";
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
      <section className="pt-12 pb-6">
        <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
        <p className="text-text-secondary">{t("description")}</p>
      </section>

      {/* Mini TOC */}
      <nav className="flex gap-x-5 text-sm text-text-secondary mb-8 pb-4 border-b border-border">
        {projectCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="hover:text-text-primary transition-colors"
          >
            {locale === "zh" ? cat.labelZh : cat.label}
          </a>
        ))}
      </nav>

      {/* Projects grouped by category */}
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
  );
}
