/** @type {import('next').NextConfig} */

const nextConfig = {

    images: {

        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/img/uploads/**',
            },
        ],

    },

};

export default nextConfig;