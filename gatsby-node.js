const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve('src/templates/article.js');

  const articleResults = await graphql(`
    query ArticlesQuery {
      allContentfulArticle {
        edges {
          node {
            createdAt
            title
            slug
            coverImage {
              fluid(maxWidth: 1200) {
                srcSetWebp
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
