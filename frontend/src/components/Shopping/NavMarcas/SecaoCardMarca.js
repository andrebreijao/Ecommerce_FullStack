/* eslint-disable react/button-has-type */
import React from 'react';
import ListaCardMarca from './ListaCardMarca';

function SecaoCardMarca() {
  return (
    <div>
      <div className="nav-marcas">
        <div id="container-conteudo">
          <div className="titulo-e-ver-mais">
            <div className="titulo-secao">Navegue pelas marcas</div>
            <a href="navegar_lojas.html" className="ver-mais">ver mais</a>
          </div>
          <div className="categorias-barra-rolagem">
            <button className="categorias-botao-rolagem" onClick="rolar_esquerda()">&#x2039;</button>
            <ListaCardMarca />
            <button className="categorias-botao-rolagem" onClick="rolar_direita()">&#x203A;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecaoCardMarca;
