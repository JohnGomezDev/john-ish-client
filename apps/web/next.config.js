/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdns-images.dzcdn.net',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.deezer.com',
        pathname: '/album/**',
      },
    ],
  },
};

export default nextConfig;
