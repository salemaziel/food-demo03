const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `Custom Restaurant Example`,
    description: `A simple Gatsby starter with react-bootstrap`,
    author: `@salemaziel`,
    siteUrl: `https://salemaziel.com`,
    ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://salemaziel.com',
        sitemap: 'https://salemaziel.com/sitemap.xml',
      }
    },
//    {
//      resolve: `gatsby-plugin-google-analytics`,
//      options: {
        // The property ID; the tracking code won't be generated without it
//        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
//        head: false,
        // Setting this parameter is optional
//        anonymize: true,
        // Setting this parameter is also optional
//        respectDNT: true,
        // Avoids sending pageview hits from custom paths
//        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
//        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
//        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
//        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
//        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
//        defer: false,
        // Any additional optional fields
//        sampleRate: 5,
//        siteSpeedSampleRate: 10,
//        cookieDomain: "viadelweb.com",
//      },
//    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Custom Restaurant Example`,
        short_name: `Custom Restaurant`,
        start_url: `/`,
        background_color: `#271514`,
        theme_color: `#271514`,
        display: `minimal-ui`,
        icon: `static/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
//        whitelist: ['body.is-preload *',' body.is-preload *:before',' body.is-preload *:after','NoDesktop', 'NoMobile', 'bg-white', 'bg-lbrown', 'bg-dbrown',], // Don't remove this selector
//         whitelistPatterns: [/btn/, /container/, /row/, /col/, /card/, /body/, /form/, /input/, /NoDesktop/, /is-preload/, /nav/, /navbar/  ],
//         ignore: ['/Section.scss', '/footer.module.css', 'layout.css' ], // Ignore files/folders
         purgeOnly : ['/theme.css'], // Purge only these files/folders
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
//    `gatsby-plugin-sitemap`,
  ],
};
