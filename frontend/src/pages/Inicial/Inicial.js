/* eslint-disable max-len */
import React from 'react';
import Navmaster from '../components/nav-bar/eshop/Navmaster';
import './inicial.css';
import Loginpop from '../components/Loginpop/Loginpop';

function viewshoppings() {
  document.getElementById('linha-cta').scrollIntoView();
}

function inicial() {
  return (
    <div>
      <Navmaster />
      <Loginpop />

      <div
        className="cta"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/Imagens/background-image.jpg`}) `,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="cta-content">
          <div id="logo-cta">Logo</div>
          <h1>O Shopping mais perto de você.</h1>
          <p>Fique a vontade para passear e ver as lojas disponíveis.</p>
          <div className="cta-content-search">
            <button onClick={viewshoppings} className="btn-medium">
              Entre nos shoppings
            </button>
          </div>
        </div>
      </div>

      <hr id="linha-cta" className="linha-entre-secoes" />

      <div id="conteudo">

        <div className="secao-lista-shoppings">
          <div className="titulo-secao">Os melhores Shoppings estão aqui</div>
          <div className="lista-cards">

            <div className="card-shopping">
              <img src="Imagens/Shoppings/São_José_dos_Campos/CenterVale/Logo 1x1.jpg" alt="logo-shopping" className="img-lista-shoppings" />
              <p>Center Vale Shopping</p>
            </div>

            <div className="card-shopping">
              <img src="./Imagens/Shoppings/São_José_dos_Campos/Colinas_Shopping/Logo 1x1.jpg" alt="logo-shopping" className="img-lista-shoppings" />
              <p>Colinas Shopping</p>

            </div>

            <a href="interface_shopping.html" id="link-card-shopping">
              <div className="card-shopping">
                <img src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo 1x1.jpg" alt="logo-shopping" className="img-lista-shoppings" />
                <p>Vale Sul Shopping</p>

              </div>
            </a>
          </div>
        </div>

        <hr className="linha-entre-secoes" />

        <div className="explica-e-shop">

          <div className="explica-e-shop-conteudo-grid">

            <div className="explica-e-shop-bloco-1">
              <div className="titulo-secao">Eshop - o Shopping na sua casa</div>
              <p>A E-Shop é uma plataforma onde você encontrará os shoppings mais próximos de você. Você pode navegar pela página do shopping e entrar no espaço virtual de suas lojas. Consultar produtos, falar com os vendedores e efetuar a compra, como se você estivesse fisicamente na loja. No vídeo ao lado explicamos como melhor utilizar as funcionalidades da E-Shop.</p>
            </div>

            <div className="explica-e-shop-bloco-2">
              <div id="video" />
            </div>

          </div>

          <hr className="linha-entre-secoes" />

        </div>

      </div>

    </div>
  );
}

export default inicial;
