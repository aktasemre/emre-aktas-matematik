import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDevelopment ? " ws: wss: https://va.vercel-scripts.com" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  isDevelopment ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/icon.svg", permanent: true },
      { source: "/matematik", destination: "/", permanent: true },
      {
        source: "/lgs",
        destination: "/lgs-matematik-ozel-ders",
        permanent: true,
      },
      {
        source: "/tyt-ayt",
        destination: "/yks-matematik-ozel-ders",
        permanent: true,
      },
      {
        source: "/okul-destek",
        destination: "/ara-sinif-matematik-ozel-ders",
        permanent: true,
      },
      { source: "/metodoloji", destination: "/hakkimda", permanent: true },
      { source: "/ucretler", destination: "/iletisim", permanent: true },
      { source: "/referanslar", destination: "/hakkimda", permanent: true },
      { source: "/ai-friendly", destination: "/", permanent: true },
      { source: "/blog", destination: "/kaynaklar", permanent: true },
      {
        source: "/blog/basaksehir-lgs-matematik-basari-rehberi",
        destination: "/basaksehir-matematik-ozel-ders",
        permanent: true,
      },
      {
        source: "/matematik-ogrenme-merkezi",
        destination: "/kaynaklar",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
