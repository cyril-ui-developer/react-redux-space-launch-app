import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { label, link } = props;
  
  return (
    <li>
      <Link to={ link }>{label}</Link>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string
};

NavItem.defaultProps = {
  label: 'Label',
  link: '/',
};

export default NavItem;