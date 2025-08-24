/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js teknik verilerini gizleme
  poweredByHeader: false,
  
  // Image optimizasyonu
  images: {
    domains: ['matematik-akademi.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Redirect ayarları
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'matematik-akademi.com',
          },
        ],
        destination: 'https://www.matematik-akademi.com',
        permanent: true,
      },
    ]
  },
  
  // Headers ayarları
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Powered-By',
            value: 'Matematik Akademi',
          },
        ],
      },
    ]
  },
  
  // Compiler ayarları
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performans optimizasyonları
  experimental: {
    optimizeCss: true,
  },
  
  // Compression
  compress: true,
  
  // Generate ETags
  generateEtags: true,
  
  // Static file serving
  staticPageGenerationTimeout: 120,
}

export default nextConfig
