import React from 'react';

function CardProdutosLoja() {
  return (
    <div>
      <div className="card-produto-grid">
        <div className="botoes-card-grid">
          <i className="fas fa-heart icone" />
          <i className="fas fa-shopping-bag icone segundo-icone" />
        </div>
        <img
          className="produto-grid-img"
          src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/hrg-1.webp"
          alt="produto"
        />
        <div className="card-grid-nome-produto">titulo</div>
        <div className="card-grid-precos">
          <div className="card-grid-preco-antigo">R$119,99</div>
          <div className="card-grid-preco-atual">Teste</div>
          <div className="card-grid-preco-parcela">Teste</div>
        </div>
      </div>
    </div>
  );
}

export default CardProdutosLoja;
