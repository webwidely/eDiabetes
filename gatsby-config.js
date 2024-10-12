/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Comprehensive Diabetes Care from Home | Telehealth Services`, 
    description: `Manage your diabetes with ease from the comfort of your home. Our telehealth services offer personalized care, virtual consultations, diabetes education, and more—helping you take control of your health.`,
    author: `@webwidely`,
    siteUrl: `https://ediabetes.ca`, 
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Comprehensive Diabetes Care`,
        short_name: `DiabetesCare`,
        start_url: `/`,
        background_color: `#fff`, 
        display: `minimal-ui`,
        icon: `src/images/SiteIcon.png`, 
      },
    },
  ],
}
