/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ titulo, imagem, preco, parcelado, id }) {
  return (
    <Link to={`/produto/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card-produto-grid">
        {/* <div className="botoes-card-grid">
          <i className="fas fa-heart icone-card" />
          <i className="fas fa-shopping-bag icone segundo-icone-card" />
  </div> */}
        <img
          className="produto-grid-img"
          src={`Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${imagem}.webp`}
          alt="produto"
        />
        <div className="card-grid-nome-produto">{titulo}</div>
        <div className="card-grid-precos">
          <div className="card-grid-preco-antigo">
            R$
            {preco}
          </div>
          <div className="card-grid-preco-atual">
            R$
            {preco}
          </div>
          <div className="card-grid-preco-parcela">{parcelado}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;