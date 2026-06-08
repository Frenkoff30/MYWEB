import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["10.0.0.72", "localhost", "127.0.0.1"],
};

export default nextConfig;
