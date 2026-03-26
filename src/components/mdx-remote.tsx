import { MDXRemote as MDXRemoteBase } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import { slugify } from "@/lib/blog";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as React.ReactElement).props.children);
  }
  return "";
}

function Heading2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const text = extractText(children);
  return <h2 id={slugify(text)} {...props}>{children}</h2>;
}

const components = { h2: Heading2 };

export function MDXRemote({ source }: { source: string }) {
  return <MDXRemoteBase source={source} components={components} />;
}
