module.exports = {
  siteMetadata: {
    title: "Gingayu",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: `http://gingayu2020.nikita.jp/graphql`,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
  			    copyQueryOnError: true,
            writeQueriesToDisk: false,
          },
      },
    },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "256781618",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
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
  //   {
  //   resolve: "gatsby-source-woocommerce",
  //   options: {
	//    // Base URL of Wordpress site
  //     api: 'http://gingayu2020.nikita.jp',
  //     // true if using https. false if nah.
  //     https: false,
  //     api_keys: {
  //       consumer_key: 'ck_233aa39d02166addd9d72f7ef762f1ab823d4cea',
  //       consumer_secret: 'cs_68c439bea00cd7e433ee3981be344ac223edcf4d',
  //     },
  //     // Array of strings with fields you'd like to create nodes for...
  //     fields: ['products']
  //   }
  // }
  //   {
	// 	resolve: "gatsby-woocommerce-theme",
	// 	options: {
	// 		wordPressUrl: 'http://gingayu2020.nikita.jp',
	// 		gatsbySiteUrl: 'http://gingayu2020.nikita.jp',
	// 		googleTagManagerId: 'xxxx',
	// 		fbAppId: 'xxxx'
	// 	}
	// },
  ],
};
