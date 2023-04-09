/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/", query: { __nextDefaultLocale: "en" } },
      "/imprints/": { page: "/imprints", query: { __nextDefaultLocale: "en" } },
      "/data-privacy/": {
        page: "/data-privacy",
        query: { __nextDefaultLocale: "en" },
      },
      "/champion-gallery/": {
        page: "/champion-gallery",
        query: { __nextDefaultLocale: "en" },
      },
      "/champion-skins/": {
        page: "/champion-skins",
        query: { __nextDefaultLocale: "en" },
      },
    };
    return paths;
  },
};

module.exports = nextConfig;
