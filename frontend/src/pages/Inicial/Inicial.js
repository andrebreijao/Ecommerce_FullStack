/* eslint-disable max-len */
import React from 'react';
import Navmaster from '../../components/nav-bar/eshop/Navmaster';
import './inicial.css';
import Loginpop from '../../components/Loginpop/Loginpop';
import Explicaweby from './Explicaweby';
import BannerWeby from './BannerWeby';
import SecaoListaShopping from './SecaoListaShopping';

function inicial() {
  return (
    <>
      <Navmaster />
      <Loginpop />
      <BannerWeby />

      <hr id="linha-cta" className="linha-entre-secoes" />

      <div id="conteudo">
        <SecaoListaShopping />

        <hr className="linha-entre-secoes" />

        <Explicaweby />
      </div>
    </>
  );
}

export default inicial;
