/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your config options here
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
           
        },
    ],
},
  reactStrictMode: true,
};

module.exports = nextConfig;
