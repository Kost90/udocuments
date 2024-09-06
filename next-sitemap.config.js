/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL;

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: `${siteUrl}/?lang=en`,
      hreflang: 'en',
    },
    {
      href: `${siteUrl}/?lang=ru`,
      hreflang: 'ru',
    },
    {
      href: `${siteUrl}/?lang=ua`,
      hreflang: 'uk-UA',
    },
  ],
}