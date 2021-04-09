/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navvalesul from '../../components/nav-bar/shopping_valesul/Navvalesul';

import listaproduto from '../../Dados/lista_produtos';
import './produto.css';

function Produto({ match, history }) {
  const prod = listaproduto.find((p) => p.id == match.params.id);

  // Quantidade de itens
  const [qty, setQty] = useState(1);

  const maisItem = () => {
    setQty(qty + 1);
  };

  const menosItem = () => {
    setQty(qty - 1);
  };

  // adicionar ao carrinho
  const addtocarthandler = () => {
    history.push(`/carrinho/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Navvalesul />
      <div className="pop-up-wishlist" id="janela-wish">
        <div className="container-grid">
          <div className="wish-pop-nav">
            <img
              src="../../Imagens/Logo-Loja-FIcticia.jpg"
              alt="Loja"
              id="logo-wish"
            />
            <Link to="/loja" style={{ textDecoration: 'none' }}>
              <div className="wish-pop-botoes">
                <button id="voltar-loja" type="button">
                  {' '}
                  Voltar a loja
                </button>
              </div>
            </Link>
          </div>
          <div className="fotos-wish">
            <img
              id="foto-wish-active"
              src={`../../Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${prod.img}.webp`}
              alt=""
            />
            <div className="foto-wish-selecoes">
              <div className="foto-wish-visao">
                <img
                  className="foto-wish-visao"
                  src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo.jpg"
                  alt=""
                  data-imagem="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo.jpg"
                />
              </div>
              <div className="foto-wish-visao">
                <img
                  className="foto-wish-visao"
                  src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo_mini1.jpg"
                  alt=""
                  data-imagem="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo_mini1.jpg"
                />
              </div>
              <div className="foto-wish-visao">
                <img
                  className="foto-wish-visao"
                  src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo_mini2.jpg"
                  alt=""
                  data-imagem="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo_mini2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="conteudo-wish-pop">
            <div className="nome-produto">{prod.titulo}</div>
            <div className="wish-precos-container">
              <div className="preco-antigo-wish">R$ 259,99</div>
              <div className="preco-wish">{prod.preco}</div>
              <div className="preco-wish-parcelado">
                {' '}
                <strong>{prod.parcelado}</strong>
              </div>
            </div>

            <div className="wish-container-linha" />

            <div className="wish-detalhes-produto">
              <div className="wish-detalhes-cor">
                <div className="select-produto-titulo">
                  ESCOLHA A COR: <strong>ROXO</strong>
                </div>
                <img className="select-produto" src="" alt="" />
              </div>
              <div className="wish-detalhes-tamanho">
                <div className="select-produto-titulo">ESCOLHA O TAMANHO:</div>
                <div className="wish-detalhes-tamanho-lista">
                  <div
                    className="select-produto select-tamanho"
                    src=""
                    alt="roxo"
                  >
                    xp
                  </div>
                  <div
                    className="select-produto select-tamanho"
                    src=""
                    alt="roxo"
                  >
                    p
                  </div>
                  <div
                    className="select-produto select-tamanho"
                    src=""
                    alt="roxo"
                  >
                    m
                  </div>
                  <div
                    className="select-produto select-tamanho"
                    src=""
                    alt="roxo"
                  >
                    g
                  </div>
                  <div
                    className="select-produto select-tamanho"
                    src=""
                    alt="roxo"
                  >
                    xg
                  </div>
                </div>
              </div>
              <div className="wish-detalhes-descricao">
                <div className="select-produto-titulo-detalhes">
                  <div className="select-produto-titulo">
                    <span className="material-icons" id="lista-ui">
                      toc
                    </span>
                    DETALHES DO PRODUTO:
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto deserunt dignissimos sunt, quasi at accusantium hic
                  rem placeat, facere tempore dolore nihil quidem ab nulla
                  tenetur. Quae blanditiis impedit perspiciatis amet placeat,
                  atque !
                </p>
              </div>
            </div>
            <div className="nav-botoes-wish">
              <button type="button">
                <span id="pop-wish-ver-wish" className="material-icons">
                  favorite
                </span>{' '}
                Ver whishlist
              </button>

              <div className="adicionar-sacola-wish">
                <div id="texto-quantidade">Quantidade</div>
                <span
                  id="remove-item "
                  className="material-icons"
                  onClick={qty > 1 && menosItem}
                  role="button"
                  tabIndex={0}
                >
                  remove
                </span>
                <input type="text" id="n-items" value={qty} />
                <span
                  id="add-item"
                  className="material-icons"
                  onClick={maisItem}
                  role="button"
                  tabIndex={0}
                >
                  add
                </span>
                <button type="button" onClick={addtocarthandler}>
                  <span className="material-icons" id="cart-wish">
                    {' '}
                    shopping_cart
                  </span>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produto;
