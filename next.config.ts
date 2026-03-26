import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/:locale/blog/claude-code-kit",
        destination: "/:locale/blog/clade",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
