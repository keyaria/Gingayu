const productTemplate = require.resolve("../src/templates/product.js");
const archiveTemplate = require.resolve("../src/templates/archive.js");
const cartTemplate = require.resolve("../src/templates/cart.js");
const aboutTemplate = require.resolve("../src/templates/about.js");
const postTemplate = require.resolve("../src/templates/post.js");
const blogTemplate = require.resolve("../src/pages/posts.js");

const chunk = require("lodash/chunk");


module.exports = async ({ actions, graphql, basePath}) => {
    const result = await graphql(`
      {
     allWpProduct {
       nodes {
           ... on WpSimpleProduct {
             id
             name
             description
             image {
               sourceUrl
             }
             attributes {
               nodes {
                 name
               }
             }
             price
             onSale
             slug
             status
             regularPrice
             salePrice
             image {
               localFile {
                 childImageSharp {
                   fixed(width: 500) {
                     width
                     height
                     src
                     srcSet
                     base64
                     tracedSVG
                     srcWebp
                     srcSetWebp
                   }
                 }
               }
             }
           }
         }
       }
   }
    `)



    const products = (result.data.allWpProduct.nodes).filter(value => Object.keys(value).length !== 0);
    console.log('kig', products.filter(value => Object.keys(value).length !== 0))

    products.forEach(product => {
      //console.log('e', product.slug, basePath)
      actions.createPage({
        path: basePath + product.slug,
        component: productTemplate,
        context: {
          id: product.id,
        },
      })
    })

    //paginantion
    const perPage = 6;
    console.log('here', products)
    const listPages = chunk(products, perPage);
    const totalArchivePages = listPages.length;


    //console.log('total', listPages)
    listPages.forEach((archiveProducts, index) => {
      const page = index + 1;
      console.log('archive', archiveProducts)
      actions.createPage({
        path: page === 1 ? basePath + 'shop' : basePath + page,
        component: archiveTemplate,
      context: {
        products: archiveProducts,
        pageInfo: {
          basePath: basePath,
          previousPage: page - 1,
          nextPage: page == totalArchivePages ? 0 : page + 1
        }
      },
      })
    })

    //cart page createPage
    actions.createPage({
  path: basePath + 'cart',
  component: cartTemplate
})


  actions.createPage({
    path: basePath + 'about',
    component: aboutTemplate
  })




  const postresult = await graphql(`
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


  const posts = postresult.data.allWpPost.nodes;
  //console.log('kig', products)

  posts.forEach(post => {
    //console.log('e', product.slug, basePath)
    actions.createPage({
      path: basePath + post.id,
      component: postTemplate,
      context: {
        id: post.id,
      },
    })
  })

  //paginantion
  const listPage1s = chunk(posts, perPage);
  const totalArchivePages3 = listPages.length;


  //console.log('total', listPages)
  listPage1s.forEach((archivePosts, index) => {
    const page = index + 1;
    console.log('archive', archivePosts)
    actions.createPage({
      path: page === 1 ? basePath + 'shop' : basePath + page,
      component: blogTemplate,
    context: {
      products: archivePosts,
      pageInfo: {
        basePath: basePath,
        previousPage: page - 1,
        nextPage: page == totalArchivePages3 ? 0 : page + 1
      }
    },
    })
  })
}
