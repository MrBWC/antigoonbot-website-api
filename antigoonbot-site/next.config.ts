import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/dc',
        destination: 'https://discord.gg/WUrPzTWTJf', // replace this
        permanent: true, // Use false for temporary (307), true for permanent (308)
      },
      {
        source: '/github',
        destination: 'https://github.com/MrBWC', // replace this
        permanent: true, // Use false for temporary (307), true for permanent (308)
      },
    ]
  },
}

export default nextConfig;
