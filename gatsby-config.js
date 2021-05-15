module.exports = {
  siteMetadata: {
    title: `Max Sandelin - Software Engineer`,
    description: `I'm a software engineer working with web technologies for Ellos Group. I specialize in frontend development, but am currently focusing on cloud architecture and devops.`,
    author: `Max Sandelin`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `themaxdev`,
        short_name: `themaxdev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#101010`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
        include_favicon: false
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter:400,500,700&display=swap']
        }
      }
    }
  ],
}
