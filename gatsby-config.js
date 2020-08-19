require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Ilya Pokamestov`,
    siteTitleAlt: `Ilya Pokamestov - Software Engineer`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Ilya Pokamestov - Software Engineer`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://ilya.pokamestov.com`,
    // Used for SEO
    siteDescription: `Personal blog of Ilya Pokamestov about systems architecture and software development.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@ilya_pokamestov`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        blogPath: `/posts`,
        feedTitle: `Ilya Pokamestov Blog`,
        navigation: [
          {
            title: `Posts`,
            slug: `/posts`,
          },
          {
            title: `About me`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/ilya_pokamestov`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/IlyaPokamestov`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ilya Pokamestov - Software Engineer`,
        short_name: `Ilya Pokamestov`,
        description: `Personal blog of Ilya Pokamestov about systems architecture and software development.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#528`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
