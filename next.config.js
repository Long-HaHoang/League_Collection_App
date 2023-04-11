/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    const paths = {
      "/": { page: "/" },
      "/imprints/": { page: "/imprints" },
      "/data-privacy/": {
        page: "/data-privacy",
      },
      "/champion-gallery/": {
        page: "/champion-gallery",
      },
      "/champion-skins/": {
        page: "/champion-skins",
      },
    };
    const newPaths = {};
    Object.keys(paths).forEach((path) => {
      const page = paths[path];
      const newPath = {
        ...page,
      };
      newPaths[path] = newPath;
    });
    return newPaths;
  },
};

module.exports = nextConfig;
