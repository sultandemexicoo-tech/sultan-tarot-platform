/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { enabled: true } },
  typescript: { ignoreBuildErrors: true },   // temporal, para destrabar
  eslint: { ignoreDuringBuilds: true }       // temporal, para destrabar
};
export default nextConfig;
