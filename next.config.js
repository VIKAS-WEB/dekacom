/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Ensure routes work correctly
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "annonceurs.ticket-promo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
  // output: "standalone",
};

module.exports = nextConfig;
