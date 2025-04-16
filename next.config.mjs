/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "res.cloudinary.com"
        }
      ]
    },
    async headers() {
      return [
        {
          // すべてのAPIルートに適用
          source: "/api/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*" // すべてのオリジンを許可。必要に応じて特定のオリジンに制限できます
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, POST, OPTIONS"
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type"
            }
          ]
        }
      ];
    }
  };
  
  export default nextConfig;