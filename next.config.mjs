import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/public': ['./public/**/*'],
    },
  },
  // output: 'standalone',
  reactStrictMode: true,
  compiler: {
    // removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
  },
  async redirects() {
    return [
      {
        source: '/admin/login',
        destination: '/sign-in',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'pin-hcms.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: 'https://pub-ce94fe258c7740b3a579a329e72059e4.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
