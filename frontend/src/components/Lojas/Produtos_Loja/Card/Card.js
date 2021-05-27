/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ titulo, imagem, preco, parcelado, id, cssCard }) {
  return (
    <Link to={`/produto/${id}`} style={{ textDecoration: 'none' }}>
      <div className={cssCard.cardGrid}>
        {/* <div className="botoes-card-grid">
          <i className="fas fa-heart icone-card" />
          <i className="fas fa-shopping-bag icone segundo-icone-card" />
  </div> */}
        <img className={cssCard.img} src={imagem} alt="produto" />
        <div className={cssCard.nomeProduto}>{titulo}</div>
        <div className={cssCard.precos}>
          <div className={cssCard.precoAntigo}>
            R$
            {preco}
          </div>
          <div className={cssCard.precoAtual}>
            R$
            {preco}
          </div>
          <div className={cssCard.precoParcelado}>{parcelado}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
