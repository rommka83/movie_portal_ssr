/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
