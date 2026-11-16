const { resolveCjenik } = require("./cjenik.config");

const cjenik = resolveCjenik(process.env.CJENIK);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: cjenik.basePath,
  assetPrefix: `${cjenik.basePath}/`,
  distDir: cjenik.distDir,
};

module.exports = nextConfig;
