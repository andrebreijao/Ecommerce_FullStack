/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import './shoppingvalesul.css';
// import ListaCat from '../../components/Shopping/ListaCat/ListaCat';
import SecaoCardMarca from '../../components/Shopping/NavMarcas/SecaoCardMarca';
import CtaValeSul from './CtaValeSul';
import NavWebyShop from '../../components/nav-bar/eshop/NavWebyShop';
import Navvaleusul2 from '../../components/nav-bar/shopping_valesul/NavValeSul2';

function ShoppingValeuSul() {
  return (
    <div>
      <NavWebyShop style={{ zIndex: '1' }} />
      <Navvaleusul2 />

      <CtaValeSul />
      <hr id="linha-cta" className="linha-entre-secoes" />
      {/* <ListaCat /> */}
      <SecaoCardMarca />
      {/* <div className="nav-destaques">
        <div id="container-conteudo">
          <div className="titulo-e-ver-mais">
            <div className="titulo-secao">Destaques</div>
            <a href="#" className="ver-mais">
              ver mais
            </a>
          </div>

          <div className="lista-cards">
            <div className="card-shopping">
              <img
                src="Imagens/loja-nike.jpeg"
                alt="logo-shopping"
                className="img-lista-shoppings"
              />
              <p>Nike</p>
              <img
                className="story-lista-shoppings"
                src="../../Imagens/loja saraiva.jpg"
                alt="story"
              />
            </div>

            <div className="card-shopping">
              <img
                src="../../Imagens/loja saraiva.jpg"
                alt="logo-shopping"
                className="img-lista-shoppings"
              />
              <p>Saraiva</p>
              <img
                className="story-lista-shoppings"
                src="Imagens/logo saraiva.jpg"
                alt="story"
              />
            </div>

            <div className="card-shopping">
              <img
                src="Imagens/loja adidas.jpg"
                alt="logo-shopping"
                className="img-lista-shoppings"
              />
              <p>Adidas</p>
              <img
                className="story-lista-shoppings"
                src="Imagens/logo adidas.png"
                alt="story"
              />
            </div>

            <div className="card-shopping">
              <img
                src="Imagens/loja renner.jpeg"
                alt="logo-shopping"
                className="img-lista-shoppings"
              />
              <p>Adidas</p>
              <img
                className="story-lista-shoppings"
                src="Imagens/logo renner.png"
                alt="story"
              />
            </div>
          </div>
        </div>
      </div> */}
      <footer className="footer-bar">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col" id="footer-col-eshop">
              <h4 id="footer-h4">Loby</h4>
              <ul id="footer-ul">
                <li>
                  <a href="#" style={{ color: 'white' }}>
                    Quem somos
                  </a>
                </li>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </ul>
            </div>

            <div className="footer-col">
              <h4 id="footer-h4">CenterVale Shopping</h4>
              <ul id="footer-ul">
                <li>(12) 3924-3026</li>
                <li>
                  Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, S??o
                  Jos?? dos Campos
                </li>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </ul>
            </div>

            <div className="footer-col" id="footer-col-info-shopping">
              <ul id="footer-ul">
                <li>HOR??RIOS DE FUNCIONAMENTO</li>
                <br />
                <li>Segunda a Domingo: 12h - 20h</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ShoppingValeuSul;
