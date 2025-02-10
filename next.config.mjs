/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com', // Allows any subdomain under cdninstagram.com
      },
    ],
  },
};

export default nextConfig;