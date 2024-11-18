import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/dsa',
  assetPrefix: '/dsa',
  /* config options here */
  images: {
    domains: ['via.placeholder.com'], 
  },
};

export default nextConfig;
