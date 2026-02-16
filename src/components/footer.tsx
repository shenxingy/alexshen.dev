import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12 mt-16 border-t border-border">
      <div className="flex items-center justify-between text-sm text-text-tertiary">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-text-secondary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
