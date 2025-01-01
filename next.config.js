/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  images: {
    unoptimized: true,
    path: '/personal-portfolio/_next/image'
  },
  assetPrefix: '/personal-portfolio/',
  trailingSlash: true,
}

module.exports = nextConfig 