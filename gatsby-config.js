// In your gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "tvist.is",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          "**/verk",
          "**/pages",
          "**/starfsmadur",
          "**/vidskiptavinir",
          "**/media",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
