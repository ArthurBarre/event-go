const subset = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~¢£¥¨©«®´¸»ÀÂÆÇÈÉÊËÎÏÔÙÛÜàâæçèéêëîïôùûüÿŒœŸˆ˚˜–—‘’‚“”„•…‹›€™ `;

module.exports = {
  siteMetadata: {
    title: "event-and-go.front",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
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
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Helvetica',
              variants: ['300', '400', '600', '700', '800', '900'],
              text: subset,
            },
          ],
        },
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/src/assets",
        },
      },
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
