const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {


    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
        ],
  },






};

module.exports = withMDX(nextConfig)
