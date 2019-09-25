const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage } = result.data

  const verkinTemplate = path.resolve(`./src/templates/verkin/verkin.js`)
  const stofanTemplate = path.resolve(`./src/templates/stofan/stofan.js`)
  const radioTemplate = path.resolve(`./src/templates/radio/radio.js`)
  const kokurTemplate = path.resolve(`./src/templates/kokur/kokur.js`)

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.slug === "verkin") {
      createPage({
        path: edge.node.path,
        component: slash(verkinTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    } else if (edge.node.slug === "vafrakokur") {
      createPage({
        path: edge.node.path,
        component: slash(kokurTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    } else if (edge.node.slug === "radio") {
      createPage({
        path: edge.node.path,
        component: slash(radioTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    } else if (edge.node.slug === "stofan") {
      createPage({
        path: edge.node.path,
        component: slash(stofanTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    }
  })
}
