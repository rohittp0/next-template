const dev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
    disable: dev,
    register: true,
    scope: "/",
    sw: "sw.js"
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    eslint: {
        dirs: ["src"],
    },

    reactStrictMode: true,
    swcMinify: true,

    env: {
        API_URL: dev ? "https://api.example.com" : "https://api.dev.example.com",
    },

    // Uncomment to add domain whitelist
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
