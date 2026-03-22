import { MDXRemote as MDXRemoteBase } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import { slugify } from "@/lib/blog";

function Heading2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const text = typeof children === "string" ? children : "";
  return <h2 id={slugify(text)} {...props}>{children}</h2>;
}

const components = { h2: Heading2 };

export function MDXRemote({ source }: { source: string }) {
  return <MDXRemoteBase source={source} components={components} />;
}
