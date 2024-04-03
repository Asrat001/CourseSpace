/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  basePath: "/",
  distDir: 'out',
  // output:'export',
  reactStrictMode: true,
}

module.exports = nextConfig
