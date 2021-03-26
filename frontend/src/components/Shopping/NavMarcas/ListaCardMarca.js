import React from 'react';
import CardMarca from './CardMarca';
import ListaMarcas from '../../../Dados/Marcas';

function ListaCardMarca() {
  return (
    <div className="categorias-barra-rolagem">
      {ListaMarcas.map((marca) => (
        <CardMarca
          imagem={marca.imagem}
          nome={marca.Nome}
          video={marca.video}
        />
      ))}
    </div>
  );
}

export default ListaCardMarca;
