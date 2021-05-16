const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve('src/templates/article/index.js');

  const articleResults = await graphql(`
    query ArticlesQuery {
      allContentfulArticle {
        edges {
          node {
            createdAt
            title
            slug
            coverImage {
              title
              fluid(maxWidth: 960) {
                base64
                aspectRatio
                sizes
                srcSet
                src
              }
            }
            content {
              raw
              references {
                contentful_id
                title
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (articleResults.error) {
    reporter.panicOnBuild('Error while running article GQL query.');
    return;
  }

  if (articleResults.data) {
    articleResults.data.allContentfulArticle.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: articleTemplate,
        context: {
          article: {
            ...edge.node,
          }
        }
      });
    });
  }
};
