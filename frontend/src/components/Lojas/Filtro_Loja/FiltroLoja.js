/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import './filtroloja.css';
import FiltroToggle from './FiltroToggle';

function MostrarStory() {
  // implementar
}

function FiltroLoja({ settermoProcurado }) {
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
                  onClick={MostrarStory()}
                  onKeyDown={MostrarStory()}
                  role="button"
                  tabIndex={0}
                >
                  Live
                </div>
                <div className="liga-desliga">
                  <input
                    type="checkbox"
                    className="liga-desliga-checkbox"
                    id="liga-desliga"
                  />
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
                    onChange={(event) => {
                      settermoProcurado(event.target.value);
                    }}
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
              <FiltroToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroLoja;
