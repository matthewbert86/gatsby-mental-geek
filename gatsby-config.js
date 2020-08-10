module.exports = {
  siteMetadata: {
    title: `Mental Geek`,
    description: `A Mental Health Community For Geeks`,
    titleTemplate: `%s | Mental Geek Blog`,
    url: `https://mentalgeek.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@john_smilga`
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`]
          },
          {
            family: `Open Sans`
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mental_geek`
      }
    }
  ]
}
