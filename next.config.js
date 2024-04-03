/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  basePath: "/CourseSpace",
  distDir: 'out',
  // output:'export',
  reactStrictMode: true,
}

module.exports = nextConfig
