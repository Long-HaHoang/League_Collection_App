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
      "/": { page: "/" },
      "/imprints/": { page: "/imprints" },
      "/data-privacy/": { page: "/data-privacy" },
      "/champion-gallery/": {
        page: "/champion-gallery",
        query: { __nextDefaultLocale: "en" },
      },
      "/champion-skins/": { page: "/champion-skins" },
    };
    return paths;
  },
};

module.exports = nextConfig;
