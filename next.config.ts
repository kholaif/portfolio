import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },

  async redirects() {
    return [
      {
        // /studio → hosted Sanity Studio (no embedded studio in production)
        source: '/studio',
        destination: 'https://suycsnce.sanity.studio',
        permanent: false,
      },
      {
        source: '/studio/:path*',
        destination: 'https://suycsnce.sanity.studio/:path*',
        permanent: false,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
