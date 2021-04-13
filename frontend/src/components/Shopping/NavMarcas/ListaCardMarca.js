import React from 'react';
import CardMarca from './CardMarca';
import ListaMarcas from '../../../Dados/Marcas';

function ListaCardMarca() {
  return (
    <>
      {ListaMarcas.map((marca) => (
        <CardMarca
          imagem={marca.imagem}
          nome={marca.Nome}
          video={marca.video}
        />
      ))}
    </>
  );
}

export default ListaCardMarca;
