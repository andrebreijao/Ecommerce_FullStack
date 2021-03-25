/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navmaster.css';

function togglePopup1() {
  document.getElementById('popup-1').classList.toggle('active');
}

function togglePopup2() {
  document.getElementById('popup-2').classList.toggle('active');
}

function Navmaster() {
  return (
    <div className="nav-bar">
      <img src="" alt="logo" id="logo-nav" />
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
  );
}

export default Navmaster;
