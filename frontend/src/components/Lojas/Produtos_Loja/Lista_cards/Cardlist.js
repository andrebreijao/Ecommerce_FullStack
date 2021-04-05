/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

function Cardlist({ produtos, reiniciarFiltro }) {
  return (
    <>
      {produtos.length === 0 ? (
        <>
          <h3>
            Infelizmente não existem produtos com essa descrição, tente
            reiniciar o filtro
          </h3>
          <button type="button" onClick={reiniciarFiltro}>
            {' '}
            Reiniciar filtro!
          </button>
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
              id={prod.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Cardlist;
