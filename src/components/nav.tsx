"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  const links = [
    { href: "/" as const, label: t("home") },
    { href: "/projects" as const, label: t("projects") },
    { href: "/blog" as const, label: t("blog") },
    { href: "/about" as const, label: t("about") },
  ];

  function switchLocale() {
    const nextLocale = locale === "en" ? "zh" : "en";
    router.replace(pathname, { locale: nextLocale });
  }

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
      <div className="flex items-center gap-1">
        <button
          onClick={switchLocale}
          className="px-2 py-1 text-sm text-text-secondary hover:text-text-primary transition-colors rounded"
          aria-label="Switch language"
        >
          {locale === "en" ? "中" : "EN"}
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
