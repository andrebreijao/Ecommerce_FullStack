/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './navvalesul.css';
import { Link } from 'react-router-dom';
import Loginpop from '../../Loginpop/Loginpop';

function togglePopup1() {
  document.getElementById('popup-1').classList.toggle('active');
}

function togglePopup2() {
  document.getElementById('popup-2').classList.toggle('active');
}

function Navvaleusul() {
  return (
    <div>
      <Loginpop />

      <div className="nav-bar">
        <Link to="/">
          <img src="Imagens/logo_weby.png" alt="logo" id="logo-nav" />
        </Link>
      </div>

      <div className="nav-bar-shopping" id="nav-vale-sul">
        <Link to="/">
          <img
            src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo_shopping_Vale_SUL.jpg"
            alt="logo"
            id="logo-shopping"
          />
        </Link>
        <div className="nav-bar-loja-menu">
          <Link to="/">
            <li href="index.html">Home</li>
          </Link>
          <Link to="/valesul">
            <li href="interface_shopping.html">Shopping</li>
          </Link>
          <Link to="/valesul">
            <li href="navegar_lojas.html">Navegar Lojas</li>
          </Link>
        </div>
        <div className="login">
          <a href="#" id="cadastro" onClick={togglePopup2}>
            <i className="fas fa-shopping-bag icone segundo-icone" />
            Sacola
          </a>
          <a href="#" id="entrar" onClick={togglePopup1}>
            <i className="fa fa-user icone" />
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navvaleusul;
