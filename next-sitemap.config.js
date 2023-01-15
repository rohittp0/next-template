/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  // Without additional '/' on the end
  siteUrl: 'https://rohittp.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
