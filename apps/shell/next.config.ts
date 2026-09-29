import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@demo/ui', '@demo/shop'],
  agentRules: false,
};

export default nextConfig;
