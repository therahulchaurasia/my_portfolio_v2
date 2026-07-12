import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Dev-only: lets phones on the LAN load the JS bundles (hydration) when
  // hitting the dev server by IP. Ignored in production builds.
  allowedDevOrigins: ["192.168.100.116"],
};

export default nextConfig;
