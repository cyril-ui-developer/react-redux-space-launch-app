import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavItem from '../NavItem';
import './Header.css';

class Header extends Component {
  static propTypes = {
    navItems: PropTypes.array
  }

  render() {
    const { navItems } = this.props;
    console.log(this.props)
    return (
      <header className='toolbar-wrapper'>
        <nav className='toolbar-navigation'>
          <div className='toolbar-logo'>
            <Link to='/'>React and Redux SpaceX App </Link>
          </div>
          <div className='toolbar-spacer' />
          <div className='toolbar-navigation-items'>
            <ul>
              {navItems.map((navItem) => (
                <NavItem
                  key={ navItem.navKey }
                  label={ navItem.navName }
                  link={ navItem.navLink }
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;