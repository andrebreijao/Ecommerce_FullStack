/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import ProdutoCarrinho from './ProdutoCarrinho';

function ListaProdutoCarrinho() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      {cartItems.map((item) => (
        <>
          <ProdutoCarrinho
            sku={item.sku}
            titulo={item.titulo}
            img={item.img}
            preco={item.preco}
            qty={item.qty}
            loja={item.loja}
          />
        </>
      ))}
    </div>
  );
}

export default ListaProdutoCarrinho;
