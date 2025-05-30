import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    basePath: '/porfolio', // porque tu repo no es jennga.github.io
};

export default nextConfig;
