import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  /** The old site's addresses (vikrantneb.com on Framer), so its links and search rankings carry over. */
  async redirects() {
    return [
      { source: "/episodes/:slug", destination: "/podcast/:slug", permanent: true },
      { source: "/episodes", destination: "/podcast", permanent: true },
      { source: "/blogs/why-i-staretd-kurieta", destination: "/blogs/why-i-started-kurieta", permanent: true },
      { source: "/resources/the-execution-gap-:rest", destination: "/resources/the-execution-gap", permanent: true },
      {
        // Placeholder entries the old site published.
        source:
          "/resources/:slug(the-intent-is-to-help-leaders-think-more-clearly|title-for-case-notes|testing-research-memo)",
        destination: "/resources",
        permanent: true,
      },
      { source: "/resource-categories/:category", destination: "/resources", permanent: true },
      { source: "/execution-under-pressure", destination: "/book", permanent: true },
      { source: "/About-us", destination: "/about", permanent: true },
      { source: "/connect", destination: "/", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
