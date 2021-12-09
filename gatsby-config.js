module.exports = {
  siteMetadata: {
    title: `Technology for Live, Virtual & Hybrid Events | Immersive AV`,
    description: `Immersive AV are an interactive technology supplier for live, virtual and hybrid events. Interactive experiences, AV& IT hire, live streaming, virtual events.`,
    author: `Voxel Studio`,
    siteUrl: `https://immersiveav.com/`,
    image: "/favicon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/vacancies`,
      },
    },
    {
      resolve: "gatsby-plugin-tidio-chat",
      options: {
        tidioKey: "vu8mlgsvi6exkmlfnvvhq5git346fbbw",
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `immersiveav.com`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "fyr5ixs",
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
