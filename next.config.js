/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const nextConfig = {
  output: 'export',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'app.penserevalida.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  experimental: { serverActions: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Sobrescreve explicitamente os fallbacks para módulos nativos que não são usados no client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        tls: false,
        net: false,
        http2: false,
        dns: false,
        http: false,
        https: false,
        async_hooks: false,
        buffer: false,
        'node:tls': false,
        'node:net': false,
        'node:http2': false,
        'node:dns': false,
        'node:http': false,
        'node:https': false,
        'node:async_hooks': false,
        'node:buffer': false,
      };
      // Adiciona o plugin para polyfill dos módulos nativos que podem ser polyfillados
      config.plugins.push(new NodePolyfillPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;