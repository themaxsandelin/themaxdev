import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import PropTypes from 'prop-types';

import Layout from '../layouts/Layout';
import Seo from '../components/atoms/Seo';

const Article = ({ pageContext }) => {
  const { article } = pageContext;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: node => (
        <Link to={`/blog/${node.data.target.slug}`} className="Content__post_reference">
          <p>{node.data.target.title}</p>
        </Link>
      ),
    }
  };

  return (
    <Layout>
      <Seo title={ article.title } />
      <h1>{ article.title }</h1>
      <div className="Content">
        { renderRichText(article.content, options) }
      </div>
    </Layout>
  );
};

export default Article;
