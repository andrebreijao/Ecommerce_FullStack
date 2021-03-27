import React from 'react';
import BannerLoja from '../../components/Lojas/Banner_Loja/BannerLoja';
import FiltroLoja from '../../components/Lojas/Filtro_Loja/FiltroLoja';
import Cardlist from '../../components/Lojas/Produtos_Loja/Lista_cards/Cardlist';
import Navvaleusul from '../../components/nav-bar/shopping_valesul/Navvalesul';
import listaBanner from '../../Dados/lista_banner';
import './loja.css';

function Loja() {
  return (
    <div>
      <Navvaleusul />
      <FiltroLoja />
      <div className="conteudo-loja">
        <BannerLoja fotosBanner={listaBanner} autoPlay="" />
        <Cardlist />
      </div>
    </div>
  );
}

export default Loja;
