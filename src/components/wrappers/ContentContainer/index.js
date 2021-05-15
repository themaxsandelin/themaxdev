import * as React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const ContentContainer = ({ children }) => (
  <div className="ContentContainer">
    <div className="ContentContainer__wrapper">
      {children}
    </div>
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;