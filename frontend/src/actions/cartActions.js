/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import listaproduto from '../Dados/lista_produtos';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const produtos = listaproduto;

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = produtos.find((e) => e.id == id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data.id,
      titulo: data.titulo,
      img: data.img,
      preco: data.preco,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
