module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Brandstak Landing`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        }
      }
    }
  ],
};
