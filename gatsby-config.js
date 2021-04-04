const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Michal Boruch Portfolio`,
    description: `Portfolio of young aspiring Front-end developer.`,
    author: `@michalboruch`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
        analyzerPort: 8005
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/assets/pdf`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        injectPageProps: false
      }
    },
    `gatsby-plugin-eslint`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
        assets: path.join(__dirname, 'src/assets')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'PORTFOLIO',
    //     fieldName: 'portfolio',
    //     url:
    //       'https://api-euwest.graphcms.com/v1/ck3yat3vk6j3c01gcfr6zhmvu/master'
    //   }
    // },
    //-------------------------------
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `9125e69c2af52e2ee97f93c818d88b`,
        environment: `main`,
        previewMode: true,
        disableLiveReload: false
      }
    }

    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'PORTFOLIO',
    //     fieldName: 'portfolio',
    //     url:
    //       'https://api-euwest.graphcms.com/v1/ck3yat3vk6j3c01gcfr6zhmvu/master'
    //   }
    // }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
