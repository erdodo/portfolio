/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    backend:"localhost:80",
    backend_: 'https://portfolio-git-backend-erdodo.vercel.app/',
  },
}

module.exports = nextConfig
