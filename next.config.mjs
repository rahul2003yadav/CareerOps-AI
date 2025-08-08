/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    experimental: {
        turbopack: false,
    },
};

export default nextConfig;
