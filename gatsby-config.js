module.exports = {
  siteMetadata: {
    title: "schoettner.rocks",
    author: 'Oliver Schöttner',
    street: "Steigerwaldstr. 33",
    postal_code: "85049",
    city: "Ingolstadt",
    email: "oliver@schoettner.rocks",
    mailto: "mailto:oliver@schoettner.rocks",
    mobile: "+49 170 / TURBO ON",
    mobileto: "tel:+491708872666",
    siteUrl: "https://schoettner.rocks",
    lang: 'de',
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://www.jt1.rocks/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `schoettner.rocks`,
        short_name: `JT1`,
        start_url: `/`,
        background_color: `#12355b`,
        theme_color: `#ff6978`,
        display: `standalone`,
        icon: `src/images/jt.png`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
        resolve: 'gatsby-source-instagram-all',
        options: {
            access_token: "IGQVJYamZA3N05JVXhqenc4VDZAsOXkxYnh6TTdfOEQ5ay1JNVNEMTl4cVFoN3BZALTQtTU1zdHhsd0ZA3Tm5tN1owdmZAjRUhsZADFFeGxSMkRPTGN1bUQ2SjRhYS11Rk40OGJkdEpqb2JIWW80UVIzYWs3bwZDZD"
        }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-EGW83Z8JK0", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};
