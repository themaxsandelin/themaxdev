import * as React from 'react';

import ContentContainer from '../../wrappers/ContentContainer';

import './style.sass';

const Footer = () => (
  <footer className="Footer">
    <ContentContainer>
      <p>This page is currently under construction. <span role="img" aria-label="Construction worker emoji">👷‍♂️</span></p>
    </ContentContainer>
  </footer>
);

export default Footer;
