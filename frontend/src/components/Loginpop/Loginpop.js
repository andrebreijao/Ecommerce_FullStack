/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './loginpop.css';

function togglePopup1() {
  document.getElementById('popup-1').classList.toggle('active');
}

function togglePopup2() {
  document.getElementById('popup-2').classList.toggle('active');
}

function Loginpop() {
  return (
    <div className="popup" id="popup-1">

      <div className="overlay" />

      <div className="content">
        <div className="close-btn" onClick={() => { togglePopup1(); togglePopup2(); }} role="button" tabIndex={0}>&times;</div>

        <img id="logo_popup" src="./imagens/WhatsApp Image 2021-01-28 at 17.54.56.jpeg" alt="Logo" />

        <div className="titulo-popup">Inicie seção</div>

        <form className="form_login-popup" action="">
          <input className="input_texto" type="text" placeholder="E-mail" />
          <input className="input_texto" type="password" placeholder="Senha" />
          <a href="#" className="esqueceu_senha">Esqueceu a senha?</a>
          <button className="btn-login" type="button">Entrar</button>
        </form>

        <a className="btn-face" href="#">
          <div className="login-face-conteudo">
            <div className="login-face">
              <img className="logo-face" id="logo-face" src="./imagens/logo-facebook.png" alt="face" />
              <div>Entrar com Facebook</div>
            </div>
            <div className="login-face" id="login-google">
              <img className="logo-face" id="logo-google" src="./imagens/Logo_Google.png" alt="face" />
              <div>Entrar com Google</div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="login-face-conteudo" role="button" tabIndex={0} onClick="togglePopup1(); togglePopup2()">
            <div className="login-face login-cadastre">
              <div>Cadastre-se</div>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}

export default Loginpop;
