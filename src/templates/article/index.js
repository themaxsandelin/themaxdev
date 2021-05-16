import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Img from 'gatsby-image';
// import PropTypes from 'prop-types';

import Layout from '../../layouts/Layout';
import Seo from '../../components/atoms/Seo';

import './style.sass';

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
      <article className="Article">
        <Seo title={ article.title } />
        <Img className="Article__cover-image" fluid={article.coverImage.fluid} alt={article.coverImage.title} placeholder="blurred" />
        <h1>{ article.title }</h1>
        <div className="Article__content">
          { renderRichText(article.content, options) }
        </div>
      </article>
    </Layout>
  );
};

export default Article;
