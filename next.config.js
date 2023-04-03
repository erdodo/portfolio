/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
  },
  env: {
    BACKEND_URL:process.env.NODE_ENV ==='development'? 'http://localhost:80/api':'https://vercel-express-app-five.vercel.app/api',
    PHOTO_URL: "https://vercel-express-app-five.vercel.app/",

  }
}

module.exports = nextConfig
