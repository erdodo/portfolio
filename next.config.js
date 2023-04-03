/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BACKEND_URL:process.env.NODE_ENV ==='development'? 'http://localhost:80/':'https://vercel-express-app-five.vercel.app/api/',
    PRODUCTION_URL: "https://portfolio-git-backend-erdodo.vercel.app/",

  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}

module.exports = nextConfig
