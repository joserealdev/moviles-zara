import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "prueba-tecnica-api-tienda-moviles.onrender.com",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
