import type { Metadata } from "next";
import { projects } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";
import { AnimatedContainer } from "@/components/animated-container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built and contributed to.",
};

export default function ProjectsPage() {
  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-2">Projects</h1>
        <p className="text-text-secondary">
          Things I&apos;ve built and contributed to.
        </p>
      </section>
      <div className="space-y-1">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} expanded />
        ))}
      </div>
    </AnimatedContainer>
  );
}
