import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
          }
        }
      }
    }
  `);

  const articles = data.allContentfulArticle.edges.map(edge => ({
    ...edge.node,
    content: edge.node.content?.content,
    coverImage: edge.node.coverImage?.file?.url,
  }));

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
              <Link to={`/blog/${article.slug}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;
