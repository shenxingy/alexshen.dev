import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="pt-24 pb-16 text-center">
      <h1 className="text-4xl font-semibold mb-4">404</h1>
      <p className="text-text-secondary mb-8">{t("message")}</p>
      <Link
        href="/"
        className="text-accent hover:text-accent-hover transition-colors"
      >
        {t("goHome")}
      </Link>
    </div>
  );
}
