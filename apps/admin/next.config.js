const nextConfig = {
  transpilePackages: ['@repo/ui', '@mdxeditor/editor'],
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Pexels
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      // Pixabay
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      // Cloudinary (own account)
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
