import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/Layout';
import Seo from '../components/atoms/Seo';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
            title
            createdAt
            coverImage {
              title
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  const articles = data.allContentfulArticle.edges.map(edge => ({
    ...edge.node,
  }));

  console.log(articles[1].coverImage);

  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Blog</h1>
      <br/>
      <p>This page will soon contain blog posts.</p>
      <ul>
        {articles.map((article, i) => {
          return (
            <li key={`article-${i}`}>
              <Link to={`/blog/${article.slug}`}>
                {article.coverImage &&
                  <Img fluid={article.coverImage.fluid} alt={article.coverImage.title} />
                }
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;
