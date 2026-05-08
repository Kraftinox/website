import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/kraftinox/backend/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.kraftinox.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kraftinox.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.kraftinox.com",
        pathname: "/**",
      },
    ],
  },
  // Experimental performance features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["gsap", "swiper", "react-toastify", "react-photo-view"],
  },
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Headers for caching
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
