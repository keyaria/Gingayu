const productTemplate = require.resolve("../src/templates/product.js");
const archiveTemplate = require.resolve("../src/templates/archive.js");
const cartTemplate = require.resolve("../src/templates/cart.js");
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


    const products = result.data.allWpProduct.nodes;
    //console.log('kig', products)

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
}
