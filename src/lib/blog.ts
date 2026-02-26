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

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: parseDate(data.date),
        excerpt: data.excerpt || "",
        content,
      };
    })
    .filter((post) => post.date !== "");

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: parseDate(data.date),
    excerpt: data.excerpt || "",
    content,
  };
}
