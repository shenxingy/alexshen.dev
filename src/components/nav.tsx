"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-6">
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-text-primary font-medium"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}
