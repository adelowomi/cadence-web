import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    // Force application/json on the universal-link / app-link files. Apple
    // rejects the AASA if the Content-Type isn't application/json, and the
    // file deliberately has no extension so Next/Netlify won't infer it.
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
    ];
  },
};

export default nextConfig;
