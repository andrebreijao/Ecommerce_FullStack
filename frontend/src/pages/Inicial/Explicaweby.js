import React from 'react';

function Explicaweby() {
  return (
    <div className="explica-e-shop">
      <div className="explica-e-shop-conteudo-grid">
        <div className="explica-e-shop-bloco-1">
          <div className="titulo-secao">Eshop - o Shopping na sua casa</div>
          <p>
            A Weby é uma plataforma onde você encontrará os shoppings mais
            próximos de você. Você pode navegar pela página do shopping e entrar
            no espaço virtual de suas lojas. Consultar produtos, falar com os
            vendedores e efetuar a compra, como se você estivesse fisicamente na
            loja. No vídeo ao lado explicamos como melhor utilizar as
            funcionalidades da Weby.
          </p>
        </div>

        <div className="explica-e-shop-bloco-2">
          <div id="video" />
        </div>
      </div>

      <hr className="linha-entre-secoes" />
    </div>
  );
}

export default Explicaweby;
