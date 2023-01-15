/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "sw.js"
});

const nextConfig = {
    eslint: {
        dirs: ["src"],
    },

    reactStrictMode: true,
    swcMinify: true,

    // Uncoment to add domain whitelist
    // images: {
    //   domains: [
    //     'res.cloudinary.com',
    //   ],
    // },

    // SVGR
    webpack(config)
    {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        typescript: true,
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = withPWA(nextConfig);
