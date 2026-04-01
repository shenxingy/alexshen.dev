import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  draft?: boolean;
}

export function formatDate(
  date: string,
  style: "short" | "long" = "short",
  locale: string = "en"
): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  const localeCode = locale === "zh" ? "zh-CN" : "en-US";
  return d.toLocaleDateString(localeCode, {
    month: style,
    day: "numeric",
    year: "numeric",
  });
}

function parseDate(raw: unknown): string {
  if (!raw) return "";
  const d = new Date(String(raw));
  return isNaN(d.getTime()) ? "" : String(raw);
}

export function getAllPosts(locale: string = "en"): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const suffix = `.${locale}.mdx`;
  const fallbackSuffix = ".en.mdx";
  const allFiles = fs.readdirSync(contentDir);

  // Get locale-specific files
  const localeFiles = allFiles.filter((f) => f.endsWith(suffix));
  const localeSlugs = new Set(localeFiles.map((f) => f.replace(suffix, "")));

  // Fall back to English for posts without a translation
  const fallbackFiles =
    locale !== "en"
      ? allFiles.filter(
          (f) =>
            f.endsWith(fallbackSuffix) &&
            !localeSlugs.has(f.replace(fallbackSuffix, ""))
        )
      : [];

  const files = [...localeFiles, ...fallbackFiles];

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.\w+\.mdx$/, "");
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: parseDate(data.date),
        excerpt: data.excerpt || "",
        content,
        draft: data.draft ?? false,
      };
    })
    .filter((post) => post.date !== "" && !post.draft);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractHeadings(
  content: string
): { text: string; id: string }[] {
  const regex = /^## (.+)$/gm;
  const headings: { text: string; id: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    headings.push({ text, id: slugify(text) });
  }
  return headings;
}

export function getPostBySlug(
  slug: string,
  locale: string = "en"
): BlogPost | null {
  // Try locale-specific file first, fall back to English
  let filePath = path.join(contentDir, `${slug}.${locale}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(contentDir, `${slug}.en.mdx`);
    if (!fs.existsSync(filePath)) return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (data.draft) return null;

  return {
    slug,
    title: data.title || slug,
    date: parseDate(data.date),
    excerpt: data.excerpt || "",
    content,
    draft: data.draft ?? false,
  };
}
