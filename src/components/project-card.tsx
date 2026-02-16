import type { Project } from "@/lib/constants";

export function ProjectCard({
  project,
  expanded = false,
}: {
  project: Project;
  expanded?: boolean;
}) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block -mx-3 px-3 py-3 rounded-lg hover:bg-bg-secondary transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-text-primary">{project.name}</h3>
            {project.url && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-tertiary group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            )}
          </div>
          <p className="text-sm text-text-secondary mt-1">
            {expanded ? project.description : project.shortDescription}
          </p>
          {expanded && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-bg-tertiary text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
