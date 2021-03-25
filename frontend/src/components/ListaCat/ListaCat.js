/* eslint-disable react/button-has-type */
import React from 'react';
import './listacat.css';

function ListaCat() {
  return (

    <div className="categorias">
      <div id="container-categorias">
        <div className="categorias-barra-rolagem">
          <button className="categorias-botao-rolagem">&#x2039;</button>
          <div className="categorias-lista" id="categorias-lista">
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Masculino2.jpg" />
              <div className="categoria-individual-label"> Masculino</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Feminino2.jpg" />
              <div className="categoria-individual-label"> Feminino</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Kids.jpg" />
              <div className="categoria-individual-label"> Kids</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Vestuário2.jpg" />
              <div className="categoria-individual-label"> Vestuário</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Calçados2.jpg" />
              <div className="categoria-individual-label"> Calçados</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Acessórios2.jpg" />
              <div className="categoria-individual-label"> Acessórios</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Esportes2.jpg" />
              <div className="categoria-individual-label"> Esportes</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Eletrônicos2.jpg" />
              <div className="categoria-individual-label"> Eletrônicos</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Games.jpg" />
              <div className="categoria-individual-label"> Games</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Beleza.jpg" />
              <div className="categoria-individual-label"> Beleza</div>
            </div>
            <div className="categorias-individual">
              <img className="categoria-individual-imagem" alt="" src="Imagens/Categorias/Decoração.jpg" />
              <div className="categoria-individual-label"> Decoração</div>
            </div>
            <div className="categorias-individual">
              <div className="categoria-individual-imagem" />
              <div className="categoria-individual-label"> Categoria</div>
            </div>
          </div>
          <button className="categorias-botao-rolagem">&#x203A;</button>
        </div>
      </div>

    </div>
  );
}

export default ListaCat;
