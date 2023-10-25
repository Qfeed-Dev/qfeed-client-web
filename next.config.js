/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true
    },
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ["qfeed-s3.s3.ap-northeast-2.amazonaws.com"]
    }
};

module.exports = nextConfig;
