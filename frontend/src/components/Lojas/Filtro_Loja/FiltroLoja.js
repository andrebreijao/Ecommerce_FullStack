/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import './filtroloja.css';
import FiltroToggleANTD from './FiltroToggleANTD';

function FiltroLoja({
  settermoProcurado,
  handleFilters1,
  handleFilters2,
  handleFilters3,
  handleFilters4,
  handleFilters5,
  setGeneroAtivo,
  // eslint-disable-next-line no-unused-vars
  generoAtivo,
  nomeLoja,
  logo,
  filtros,
}) {
  return (
    <div>
      {/* <StoryLoja /> */}
      <div className="nav-filtros">
        <div className="nav-filtros-conteudo">
          <div className="nav-filtro-conteudo-flex-container">
            <div className="campo-busca">
              <img src={logo} alt={nomeLoja} id="nav-filtros-logo-loja" />

              {/* <div className="instagram-copy-kkk">
                <div
                  className="stories"
                  id="ao-vivo-animation"
                  onClick={}
                  onKeyDown={}
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
                </div> */}

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
                  <button
                    id="campo-de-busca-botao"
                    type="button"
                    style={{ cursor: 'auto' }}
                  >
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
                    style={{
                      color: generoAtivo === 'masculino' ? 'red' : 'black',
                    }}
                    onClick={(e) => {
                      if (generoAtivo === e.target.value) {
                        setGeneroAtivo('');
                      } else {
                        setGeneroAtivo(e.target.value);
                      }
                    }}
                  >
                    Masculino
                  </button>
                  <button
                    className="genero"
                    id="gen"
                    value="feminino"
                    type="button"
                    style={{
                      color: generoAtivo === 'feminino' ? 'red' : 'black',
                    }}
                    onClick={(e) => {
                      if (generoAtivo === e.target.value) {
                        setGeneroAtivo('');
                      } else {
                        setGeneroAtivo(e.target.value);
                      }
                    }}
                  >
                    Feminino
                  </button>
                  <button
                    className="genero"
                    id="kids"
                    value="kids"
                    type="button"
                    style={{
                      color: generoAtivo === 'kids' ? 'red' : 'black',
                    }}
                    onClick={(e) => {
                      if (generoAtivo === e.target.value) {
                        setGeneroAtivo('');
                      } else {
                        setGeneroAtivo(e.target.value);
                      }
                    }}
                  >
                    Kids
                  </button>
                </div>
                <FiltroToggleANTD
                  style={{ margin: '0px' }}
                  className="lista-toggle-filtro"
                  handleFilters1={handleFilters1}
                  handleFilters2={handleFilters2}
                  handleFilters3={handleFilters3}
                  handleFilters4={handleFilters4}
                  handleFilters5={handleFilters5}
                  filtros={filtros}
                />
                {/* <div style={{ height: '5px', backgroundColor: 'lightblue' }} />
                <FiltroToggleANTD
                  style={{ margin: '0px' }}
                  className="lista-toggle-filtro"
                  handleFilters={handleFilters}
                />
                <div
                  style={{
                    height: '5px',
                    backgroundColor: 'rgb(252, 179, 22)',
                  }}
                />
                <FiltroToggleANTD
                  style={{ margin: '0px' }}
                  className="lista-toggle-filtro"
                  handleFilters={handleFilters}
                />
                <div
                  style={{ height: '5px', backgroundColor: 'rgb(234, 29, 60)' }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroLoja;
