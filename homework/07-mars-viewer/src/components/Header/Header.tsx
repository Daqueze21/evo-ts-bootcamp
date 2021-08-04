import React from 'react';
import { NavLink } from 'react-router-dom';

// style
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.container}>
      <NavLink
        to="/Photos"
        activeStyle={{
          color: '#4572ED',
        }}
      >
        Photos
      </NavLink>
      <span className={style.separator}>|</span>
      <NavLink
        to="/Favorite"
        activeStyle={{
          color: '#4572ED',
        }}
      >
        Favorite
      </NavLink>
    </header>
  );
};

export default Header;
