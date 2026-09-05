import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/platform",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/platform/:path*",
        destination: "/technology/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
