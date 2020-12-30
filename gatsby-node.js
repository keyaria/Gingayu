const createPrductPages = require("./utils/createProductPages");
const downloadImageResolver = require("./utils/downloadImageResolver");

let basePath;
exports.onPreBootstrap = ({ store }, themeOptions) => {

  basePath = themeOptions.basePath || `/`

}

exports.createPages = async ({ actions, graphql }) => {
  await createPrductPages({ actions, graphql, basePath })
}

exports.createResolvers = (obj) => {
  downloadImageResolver(obj)
}
