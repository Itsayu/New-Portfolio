const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  sw: "service-worker.js",
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // FIX: Force Next.js SWC to aggressively optimize and tree-shake heavy icons/3D libraries.
  // This reduces the massive multi-megabyte footprint down to several kilobytes.
  transpilePackages: [
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/pro-duotone-svg-icons',
    '@fortawesome/pro-light-svg-icons',
    '@fortawesome/pro-regular-svg-icons',
    '@fortawesome/pro-solid-svg-icons',
    '@fortawesome/pro-thin-svg-icons',
    '@fortawesome/sharp-solid-svg-icons',
    'react-icons',
    'three'
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.shields.io",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
      {
        protocol: "https",
        hostname: "medium.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "**.dev.to", 
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },

  experimental: {
    turbo: {
      rules: {},
    },
  },

  webpack(config) {
    return config;
  },
};

module.exports = withPWA(nextConfig);