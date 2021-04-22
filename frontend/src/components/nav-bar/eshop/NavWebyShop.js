/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './NavWebyShop.css';
import { Link } from 'react-router-dom';

function NavWebyShop() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src="Imagens/logo_weby.png" alt="logo" id="logo-nav" />
      </Link>
    </div>
  );
}

export default NavWebyShop;
