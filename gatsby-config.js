module.exports = {
  siteMetadata: {
    title: "event-and-go.front",
  },
  plugins: [
    {
			resolve: 'gatsby-plugin-sass',
			options: { cssLoaderOptions: { camelCase: false } },
		},
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
