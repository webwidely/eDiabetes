/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Diabetes Telehealth | Virtual Consultations & Personalized Care`,
    description: `Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110.`,
    author: `@webwidely`,
    siteUrl: `https://ediabetes.ca`,
    keywords: `diabetes management, telehealth, virtual consultations, diabetes education, personalized care, diabetes monitoring, remote healthcare, diabetes support, health technology, online healthcare, diabetes treatment, chronic disease management, patient care, wellness programs, diabetes resources, nutrition for diabetes, blood sugar control, diabetes prevention, healthcare technology, telemedicine, digital health, Diabetic Foot assessment ,  Diabetic foot care, Diabetic vaccinations`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        userAgent: '*', // Apply to all user agents
        allow: '/', // Allow crawling of the entire site
        disallow: [], // Disallow specific paths if needed
        // Removed sitemap option since you will add it manually
        host: 'https://ediabetes.ca', // Your domain
      },
    },
  ],
}
