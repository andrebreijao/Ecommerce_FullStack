import React from 'react';

function Loginpop() {
  return (
    <div className="popup" id="popup-1">

      <div className="overlay"></div>

      <div className="content">
        <div className="close-btn" onClick="togglePopup1()">&times;</div>

        <img id="logo_popup" src="./imagens/WhatsApp Image 2021-01-28 at 17.54.56.jpeg" alt="Logo" />

        <div className="titulo-popup">Inicie seção</div>

        <form className="form_login-popup" action="">
          <input className= "input_texto" type="text" placeholder="E-mail" />
          <input className= "input_texto" type="password" placeholder="Senha" />
          <a href="#" className="esqueceu_senha">Esqueceu a senha?</a>
          <button className="btn-login">Entrar</button>
        </form>

        <a className="btn-face" href="#">
          <div className="login-face-conteudo">
            <div className="login-face">
              <img className="logo-face"id= "logo-face"src="./imagens/logo-facebook.png" alt="face" />
              <div>Entrar com Facebook</div>
            </div>
            <div className="login-face" id="login-google">
              <img className="logo-face" id="logo-google" src="./imagens/Logo_Google.png" alt="face" />
              <div>Entrar com Google</div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="login-face-conteudo" onClick="togglePopup1(); togglePopup2()">
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
