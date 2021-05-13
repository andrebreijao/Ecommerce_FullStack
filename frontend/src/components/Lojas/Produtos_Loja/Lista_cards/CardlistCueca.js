/* eslint-disable react/prop-types */
import React from 'react';
import CardCueca from '../Card/CardCueca';
import './Cardlist.css';
import Message from '../../../Message/Message';

function CardlistCueca({ produtos }) {
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
            <CardCueca
              titulo={prod.titulo}
              imagem={prod.img}
              preco={prod.preco}
              key={prod.img}
              id={prod.sku}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CardlistCueca;
