const postTemplate = require.resolve("../src/templates/post.js");
const blogTemplate = require.resolve("../src/pages/posts.js");

const chunk = require("lodash/chunk");


module.exports = async ({ actions, graphql, basePath}) => {
    const result = await graphql(`
      {
        allWpPost {
       edges {
         node {
           id
           date
         }
       }
       nodes {
         id
         date
         title
         content
       }
     }
   }
    `)


    const posts = result.data.allWpPost.nodes;
    //console.log('kig', products)

    posts.forEach(post => {
    console.log('e', post)
      actions.createPage({
        path: basePath + post.id,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })

    //paginantion
    const perPage = 6;
    const listPages = chunk(posts, perPage);
    const totalArchivePages = listPages.length;


    //console.log('total', listPages)
    listPages.forEach((archivePosts, index) => {
      const page = index + 1;
      console.log('archive', archivePosts)
      actions.createPage({
        path: page === 1 ? basePath + 'blog' : basePath + page,
        component: blogTemplate,
      context: {
        products: archivePosts,
        pageInfo: {
          basePath: basePath,
          previousPage: page - 1,
          nextPage: page == totalArchivePages ? 0 : page + 1
        }
      },
      })
    })
  }
