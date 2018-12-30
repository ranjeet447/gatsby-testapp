module.exports = {
  siteMetadata: {
    title: `RedCarpetUp`,
    description: `map with boundries of vollages of Rajasthan`,
    siteUrl:'https://serene-thicket-20855.herokuapp.com/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `RedCarpetUp`,
        short_name: `RedCarpetUp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GCMS",
        // This is the field under which it's accessible
        fieldName: "gcmsdata",
        // URL to query from
        url: "https://api-apeast.graphcms.com/v1/cjq8if41jf1k001drvoc9eh3w/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-react-leaflet'
  ],
}
