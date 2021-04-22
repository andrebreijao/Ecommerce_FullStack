/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './NavValeSul2.css';
import { Link } from 'react-router-dom';

function Navvaleusul2() {
  return (
    <div className="nav-bar-shopping-loja2" id="nav-vale-sul-loja2">
      <Link to="/">
        <img
          src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo_shopping_Vale_SUL.jpg"
          alt="logo"
          id="logo-shopping"
        />
      </Link>
      <div className="nav-bar-loja-menu2">
        <Link to="/">
          <li href="index.html">Home</li>
        </Link>
        <Link to="/valesul">
          <li>Shopping</li>
        </Link>
        <Link to="/valesul">
          <li>Navegar Lojas</li>
        </Link>
      </div>
      <div className="login2">
        <Link to="/carrinho" id="cadastro">
          <i className="fas fa-shopping-bag icone segundo-icone" />
          Sacola
        </Link>
        <Link id="entrar2" to="/login">
          <i className="fa fa-user icone" />
          Entrar
        </Link>
      </div>
    </div>
  );
}

export default Navvaleusul2;
