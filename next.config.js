/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  basePath: "/CourseSpace",
  distDir: '.next',
  // output:'export',
  reactStrictMode: true,
}

module.exports = nextConfig
