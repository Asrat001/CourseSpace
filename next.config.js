/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  basePath: "/",
  distDir: '.next',
  // output:'export',
  reactStrictMode: true,
}

module.exports = nextConfig
