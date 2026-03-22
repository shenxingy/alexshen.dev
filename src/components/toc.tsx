"use client";

import { useEffect, useState } from "react";

interface Heading {
  text: string;
  id: string;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0% -70% 0%", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <aside
      className="hidden xl:block fixed top-32 w-36 text-xs"
      style={{ left: "calc(50% - 33rem)" }}
    >
      <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-widest mb-3">
        Contents
      </p>
      <nav className="space-y-2 border-l border-border pl-3">
        {headings.map(({ text, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block leading-snug transition-colors ${
              activeId === id
                ? "text-text-secondary"
                : "text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
