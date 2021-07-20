/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-sitemap`, {
    siteMetadata: {
      siteUrl: `https://www.thesandymane.com`,
    }
  }],
}
