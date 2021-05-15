import * as React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/organisms/Header';
import ContentContainer from '../components/wrappers/ContentContainer';
import Footer from '../components/organisms/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main role="main">
      <ContentContainer>
        {children}
      </ContentContainer>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
