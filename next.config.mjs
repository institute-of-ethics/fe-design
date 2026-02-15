/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd && process.env.GITHUB_ACTIONS ? '/fe-design' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
