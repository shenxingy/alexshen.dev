import Link from "next/link";
import { siteConfig, projects } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { ProjectCard } from "@/components/project-card";
import { AnimatedContainer } from "@/components/animated-container";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-bg-tertiary flex items-center justify-center text-xl font-semibold text-text-secondary">
            AS
          </div>
          <div>
            <h1 className="text-xl font-semibold">{siteConfig.name}</h1>
            <p className="text-text-secondary">{siteConfig.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
          </a>
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-1">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
              Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-1">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block -mx-3 px-3 py-3 rounded-lg hover:bg-bg-secondary transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </span>
                  <time className="text-sm text-text-tertiary whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
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
        </section>
      )}
    </AnimatedContainer>
  );
}
