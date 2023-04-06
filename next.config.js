/** @type {import('next').NextConfig} */
const nextConfig = {
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
      "/champion-gallery/": { page: "/champion-gallery" },
      "/champion-skins/": { page: "/champion-skins" },
    };
    return paths;
  },
};

module.exports = nextConfig;
