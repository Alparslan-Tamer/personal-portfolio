/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/personal-portfolio/',
  trailingSlash: true,
}

module.exports = nextConfig 