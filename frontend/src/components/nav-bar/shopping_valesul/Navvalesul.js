/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './navvalesul.css';
import Loginpop from '../../Loginpop/Loginpop';

function togglePopup1() {
  document.getElementById('popup-1').classList.toggle('active');
}

function togglePopup2() {
  document.getElementById('popup-2').classList.toggle('active');
}

function Navmaster() {
  return (
    <div>
      <Loginpop />

      <div className="nav-bar">
        <a href="index.html">
          <img src="" alt="logo" id="logo-nav" />
        </a>
      </div>

      <div className="nav-bar-shopping">
        <a href="interface_shopping.html">
          <img src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo_shopping_Vale_SUL.jpg" alt="logo" id="logo-shopping" />
        </a>
        <div className="nav-bar-loja-menu">
          <a href="index.html">Home</a>
          <a href="interface_shopping.html">Shopping</a>
          <a href="navegar_lojas.html">Navegar Lojas</a>
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

export default Navmaster;
