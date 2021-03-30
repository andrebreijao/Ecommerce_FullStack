/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

function Cardlist({ produtos }) {
  return (
    <div className="lista-produtos-grid">
      {produtos.map((prod) => (
        <Card
          titulo={prod.titulo}
          imagem={prod.img}
          preco={prod.preco}
          parcelado={prod.parcelado}
        />
      ))}
    </div>
  );
}

export default Cardlist;
