/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  distDir: '.next',
  // output:'export',
  reactStrictMode: true,
}

module.exports = nextConfig
