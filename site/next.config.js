/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'washingj77 - Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://washingj77.github.io/KASM-IMGZ-1/',
    contactUrl: 'https://github.com/washingj77/KASM-IMGZ-1.git',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/KASM-IMGZ-1/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
