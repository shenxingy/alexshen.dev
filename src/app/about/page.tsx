import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { AnimatedContainer } from "@/components/animated-container";
import { ExternalLinkIcon } from "@/components/external-link-icon";

export const metadata: Metadata = {
  title: "About",
  description: "About Alex Shen — engineer, builder, tinkerer.",
};

export default function AboutPage() {
  return (
    <AnimatedContainer>
      <section className="pt-12 pb-8">
        <h1 className="text-2xl font-semibold mb-6">About</h1>

        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            I&apos;m Alex — a Founding Engineer at{" "}
            <a
              href="https://get-reality.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary underline underline-offset-2 hover:text-accent transition-colors"
            >
              Scam AI
            </a>
            , where I build ML systems and full-stack products to combat online
            fraud. I work across the stack — from training models and designing
            data pipelines to shipping user-facing features.
          </p>

          <p>
            Before this, I studied at Duke University where I explored the
            intersection of computer science and machine learning. I&apos;m
            drawn to problems that require both technical depth and product
            thinking.
          </p>

          <p>
            Outside of work, I like building side projects, exploring new tools,
            and occasionally writing about things I&apos;ve learned.
          </p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Founding Engineer</h3>
              <span className="text-sm text-text-tertiary">2024 — Present</span>
            </div>
            <p className="text-text-secondary text-sm">Scam AI (Reality Defender)</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          Education
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Duke University</h3>
              <span className="text-sm text-text-tertiary">2020 — 2024</span>
            </div>
            <p className="text-text-secondary text-sm">
              B.S. Computer Science
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
          Connect
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
