import React from 'react';
import Card from '../Card/Card';
import listaproduto from '../../../../Dados/lista_produtos';
import './Cardlist.css';

function Cardlist() {
  return (
    <div className="lista-produtos-grid">
      {listaproduto.map((prod) => (
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
