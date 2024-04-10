/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https",
            },
            {
                hostname: "ibb.co",
                protocol: "https",
            },
            {
                hostname: "i.ibb.co",
                protocol: "https",
            }
        ]
    }
};

export default nextConfig;
