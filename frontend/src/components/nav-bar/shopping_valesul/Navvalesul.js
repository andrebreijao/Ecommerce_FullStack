/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './navvalesul.css';
import { Link } from 'react-router-dom';

function Navvaleusul() {
  return (
    <div>
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
          <Link to="/carrinho" id="cadastro">
            <i className="fas fa-shopping-bag icone segundo-icone" />
            Sacola
          </Link>
          <Link id="entrar" to="/login">
            <i className="fa fa-user icone" />
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navvaleusul;
