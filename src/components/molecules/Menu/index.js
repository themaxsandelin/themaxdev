import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Menu = (props) => (
  <ul className="Menu">
    {props.items.map((item, i) => {
      return (
        <li className="Menu__item" key={i}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      );
    })}
  </ul>
);

Menu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Menu;
