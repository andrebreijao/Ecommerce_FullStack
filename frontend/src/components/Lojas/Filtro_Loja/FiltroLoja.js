/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
// import StoryLoja from '../Story_Loja/StoryLoja';
import './filtroloja.css';
// import $ from 'jquery';

function mostrar_story() {
  // implementar
}

function FiltroLoja() {
  return (
    <div>
      {/* <StoryLoja /> */}
      <div className="nav-filtros">
        <div className="nav-filtros-conteudo">
          <div className="nav-filtro-conteudo-flex-container">
            <div className="campo-busca">
              <img
                src="./Imagens/Logo-Loja-FIcticia.jpg"
                alt=""
                id="nav-filtros-logo-loja"
              />
              <div className="instagram-copy-kkk">
                <div
                  className="stories"
                  id="ao-vivo-animation"
                  onClick={mostrar_story()}
                >
                  Live
                </div>
                <div className="liga-desliga">
                  <input
                    type="checkbox"
                    className="liga-desliga-checkbox"
                    id="liga-desliga"
                  />
                  <label
                    htmlFor="liga-desliga"
                    className="liga-desliga-texto"
                    data-checked="Seguindo"
                    data-unchecked="Seguir"
                  />
                </div>
              </div>

              <div className="container-input" id="container-busca">
                <div className="campo-busca-input">
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    id="campo-busca-input-text"
                  />
                  <button id="campo-de-busca-botao" type="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
                <div className="linha-personalizavel" id="linha-primaria" />
              </div>

              <div className="container-input" id="container-genero">
                <div className="filtro-toggle">
                  <button
                    className="genero"
                    id="gen"
                    value="masculino"
                    type="button"
                  >
                    Masculino
                  </button>
                  <button
                    className="genero"
                    id="gen"
                    value="feminino"
                    type="button"
                  >
                    Feminino
                  </button>
                  <button
                    className="genero"
                    id="kids"
                    value="kids"
                    type="button"
                  >
                    Kids
                  </button>
                </div>
              </div>

              <div className="lista-toggle-filtro">
                <div
                  className="filtro-toggle"
                  id="cat_1"
                  data-aba="cat_1_toogle"
                >
                  <div className="filtro-toggle-texto">Categoria</div>
                  <div className="filtro-toggle-imagem">
                    <img src="./Imagens/seta-baixo.svg" alt="" />
                  </div>
                </div>
                <div
                  className="linha-personalizavel-toggle"
                  id="linha-primaria"
                />

                <div className="filtro-toggle-opcoes" id="cat_1_toogle">
                  <input
                    type="checkbox"
                    id="bermudas"
                    name="bermudas"
                    value="Bike"
                  />
                  <label htmlFor="bermudas"> Bermudas</label>
                  <br />

                  <input type="checkbox" id="calca" name="calca" value="Bike" />
                  <label htmlFor="calca"> Calças </label>
                  <br />

                  <input
                    type="checkbox"
                    id="camisetas"
                    name="camisetas"
                    value="Bike"
                  />
                  <label htmlFor="Camisetas"> Camisetas</label>
                  <br />

                  <input
                    type="checkbox"
                    id="regatas"
                    name="regatas"
                    value="Bike"
                  />
                  <label htmlFor="regatas"> Regatas</label>
                  <br />
                </div>

                <div
                  className="filtro-toggle"
                  id="cat_2"
                  data-aba="cat_2_toogle"
                >
                  <div className="filtro-toggle-texto">Tamanho</div>
                  <div className="filtro-toggle-imagem">
                    <img src="./Imagens/seta-baixo.svg" alt="" />
                  </div>
                </div>
                <div
                  className="linha-personalizavel-toggle"
                  id="linha-secundaria"
                />

                <div className="filtro-toggle-opcoes" id="cat_2_toogle">
                  <input type="checkbox" id="p" name="p" value="Bike" />
                  <label htmlFor="p">P</label>
                  <br />

                  <input type="checkbox" id="m" name="m" value="Bike" />
                  <label htmlFor="m">M</label>
                  <br />

                  <input type="checkbox" id="g" name="g" value="Bike" />
                  <label htmlFor="g"> G</label>
                  <br />
                </div>

                <div
                  className="filtro-toggle"
                  id="cat_3"
                  data-aba="cat_3_toogle"
                >
                  <div className="filtro-toggle-texto">Faixa de preço</div>
                  <div className="filtro-toggle-imagem">
                    <img src="./Imagens/seta-baixo.svg" alt="" />
                  </div>
                </div>
                <div
                  className="linha-personalizavel-toggle"
                  id="linha-terciaria"
                />

                <div className="filtro-toggle-opcoes" id="cat_3_toogle">
                  <input
                    type="checkbox"
                    id="faixa-1"
                    name="faixa-1"
                    value="Bike"
                  />
                  <label htmlFor="faixa-1">R$0-R$19,99</label>
                  <br />

                  <input
                    type="checkbox"
                    id="faixa-1"
                    name="faixa-1"
                    value="Bike"
                  />
                  <label htmlFor="faixa-1">R$20-R$49,99</label>
                  <br />

                  <input
                    type="checkbox"
                    id="faixa-1"
                    name="faixa-1"
                    value="Bike"
                  />
                  <label htmlFor="faixa-1">R$50-R$99,99</label>
                  <br />

                  <input
                    type="checkbox"
                    id="faixa-1"
                    name="faixa-1"
                    value="Bike"
                  />
                  <label htmlFor="faixa-1">R$100-R$199,99</label>
                  <br />

                  <input
                    type="checkbox"
                    id="faixa-1"
                    name="faixa-1"
                    value="Bike"
                  />
                  <label htmlFor="faixa-1">R$200-R$299,99</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroLoja;
