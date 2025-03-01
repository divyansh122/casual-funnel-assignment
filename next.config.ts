import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  transpilePackages: ['@shopify/polaris'], // Move to root level
};

export default nextConfig;
