import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 text-center">
      <h1 className="text-4xl font-semibold mb-4">404</h1>
      <p className="text-text-secondary mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="text-accent hover:text-accent-hover transition-colors"
      >
        Go home →
      </Link>
    </div>
  );
}
