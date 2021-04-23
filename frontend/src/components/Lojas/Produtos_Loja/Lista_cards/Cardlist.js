/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';
import Message from '../../../Message/Message';

function Cardlist({ produtos }) {
  return (
    <>
      {produtos.length === 0 ? (
        <>
          <Message variant="info">
            Infelizmente não existem produtos com essa descrição, tente
            reiniciar o filtro
          </Message>
        </>
      ) : (
        <div className="lista-produtos-grid">
          {produtos.map((prod) => (
            <Card
              titulo={prod.titulo}
              imagem={prod.img}
              preco={prod.preco}
              parcelado={prod.parcelado}
              key={prod.img}
              id={prod.sku}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Cardlist;
