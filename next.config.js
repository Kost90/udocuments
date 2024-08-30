/** @type {import('next-sitemap').IConfig} */
// const sitemapConfig = {
//     siteUrl: process.env.SITE_URL,
//     generateRobotsTxt: true,
//     sitemapSize: 7000,
//
// };

// const experimentalConfig = {
//     experimental: {
//         missingSuspenseWithCSRBailout: false,
//     },
// };

module.exports = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}
