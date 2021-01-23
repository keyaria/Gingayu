module.exports = {
  siteMetadata: {
    title: "Gingayu",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "WP",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "wp",
    //     // Url to query from
    //     url: "https://gingayu.com/wp/graphql",
    //   },
    // },
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        concurrentRequests: 10,
        url: "http://gingayu2020.nikita.jp/graphql",
        debug: {
          graphql: {
            showQueryVarsOnError: true,
  			    copyQueryOnError: true,
            writeQueriesToDisk: true
          },
      },
      develop: {
  hardCacheMediaFiles: false,
},
type: {
         Post: {
           limit: 1,
         },
         Product: {
           limit: 3,
         }
    },
  },
},
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "256781618",
      },
    },
    "gatsby-plugin-emotion",
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
  //     api: 'https://gingayu.com',
  //     // true if using https. false if nah.
  //     https: false,
  //     api_keys: {
  //       consumer_key: '',
  //       consumer_secret: '',
  //     },
  //     // Array of strings with fields you'd like to create nodes for...
  //     fields: ['products']
  //   }
  // },
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
