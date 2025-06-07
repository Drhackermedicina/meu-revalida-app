/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'app.penserevalida.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Para módulos nativos do Node iniciados com "node:" e outros
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        http2: false,
        dns: false,
        async_hooks: false,
        buffer: false,
        "node:fs": false,
        "node:net": false,
        "node:tls": false,
        "node:http2": false,
        "node:dns": false,
        "node:async_hooks": false,
        "node:buffer": false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;