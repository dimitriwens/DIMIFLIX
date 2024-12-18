/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/**",
                },
            ],
        },
        reactStrictMode: true,
        experimental: {
          appDir: true, // Enable app directory if you're using Next.js 13+
        },
};

export default nextConfig;
