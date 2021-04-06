/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import listaproduto from '../../Dados/lista_produtos';
import './produto.css';

function Produto({ match }) {
  const prod = listaproduto.find((p) => p.id == match.params.id);

  return (
    <div className="pop-up-wishlist" id="janela-wish">
      <div className="container-grid">
        <div className="wish-pop-nav">
          <img src="./Imagens/Logo-Loja-FIcticia.jpg" alt="" id="logo-wish" />
          <Link to="/loja" style={{ textDecoration: 'none' }}>
            <div className="wish-pop-botoes">
              <button id="voltar-loja"> Voltar a loja</button>
            </div>
          </Link>
        </div>
        <div className="fotos-wish">
          <img
            id="foto-wish-active"
            src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/Casaco_roxo.jpg"
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
            <button>
              <span id="pop-wish-ver-wish" className="material-icons">
                favorite
              </span>{' '}
              Ver whishlist
            </button>

            <div className="adicionar-sacola-wish">
              <div id="texto-quantidade">Quantidade</div>
              <span id="remove-item " className="material-icons">
                remove
              </span>
              <input type="text" id="n-items" />
              <span id="add-item" className="material-icons">
                add
              </span>
              <button>
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
  );
}

export default Produto;
