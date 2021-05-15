import * as React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import ContentContainer from '../../wrappers/ContentContainer';
import Menu from '../../molecules/Menu';

import './style.sass';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const menuItems = [
    {
      link: '/blog',
      text: 'Blog',
    },
  ];

  return (
    <header className="Header">
      <ContentContainer>
        <div className="Header__inner">
          <p>
            <Link to="/">{data.site.siteMetadata.author}</Link>
          </p>
          <Menu items={menuItems} />
        </div>
      </ContentContainer>
    </header>
  );
};

export default Header;
