/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navmaster from '../../../components/nav-bar/eshop/Navmaster';
import LojaCarrinho from '../../../components/carrinho/LojaCarrinho';
import EnderecoCarrinho from '../../../components/carrinho/EnderecoCarrinho';
import PagamentoCarrinho from '../../../components/carrinho/PagamentoCarrinho';
import TotalCarrinho from '../../../components/carrinho/TotalCarrinho';
import Message from '../../../components/Message/Message';

// funcionalidades
import { addToCart } from '../../../actions/cartActions';
import { createOrder } from '../../../actions/orderActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
  paper: {
    margin: theme.spacing(1),
    width: '100%',
    padding: theme.spacing(1),
    backgroundColor: '#F8F9FB',
  },

  paperContainer: {
    margin: theme.spacing(1),
    width: '100%',
    padding: theme.spacing(1),
  },

  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'center',
  },

  price: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    width: '100%',
    height: '100%',
    fontWeight: 600,
  },

  qty: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    width: '100%',
    height: '100%',
    fontWeight: 600,
    backgroundColor: 'red',
  },

  IconButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },

  nomeLoja: {
    textTransform: 'upperCase',
    fontWeight: 600,
    margin: theme.spacing(1),
  },
  listaProdutos: {
    textTransform: 'upperCase',
    fontWeight: 500,
    margin: theme.spacing(1),
  },
  resumoNumero: {
    textTransform: 'upperCase',
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '#636464',
    margin: theme.spacing(2),
  },
  buttonResumo: {
    textTransform: 'upperCase',
    fontWeight: 600,
    fontSize: '0.8rem',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
  },
  endereco: {
    textTransform: 'upperCase',
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '#636464',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0),
  },
  enderecoTitulo: {
    textTransform: 'upperCase',
    fontWeight: 600,
    fontSize: '0.8rem',
    color: 'darkblue',
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0),
  },
  totalCompra: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '#636464',
    padding: theme.spacing(1),
  },
  totalCompraValor: {
    fontWeight: 600,
    fontSize: '1.5rem',
    color: 'black',
    padding: theme.spacing(1),
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  buttonFinalizar: {
    backgroundColor: '#148BA6',
    width: '100%',
    margin: '2rem 0rem 1rem 0rem',
  },

  carrinhoVazio: {
    paddin: '1rem',
    margin: '1rem',
    width: '100%',
  },
}));

export default function CarrinhoMD({ match, location, history }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = match.params.id;
  const qty = location.search ? location.search.split('=')[1] : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  //   Calculate prices
  const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.preco * item.qty, 0)
  );

  // cart.shippingPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.shippingPrice = 12.99;

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const totalColinas = cartItems
    .reduce((acc, item) => acc + item.qty * parseFloat(item.preco), 0)
    .toFixed(2);

  const totalGasto = (Number(12.99) + Number(totalColinas)).toFixed(2);

  // Postar pedido
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      /* dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET }); */
    }
    // eslint-disable-next-line
  }, [history, success]);

  // verificar se user está logado

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const placeOrderHandler = () => {
    if (!userInfo) {
      history.push('/login?redirect=carrinho');
    } else {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
        })
      );
    }
  };

  return (
    <div className={classes.root}>
      <Navmaster />
      <Grid container spacing={3}>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={12} sm={8}>
            {cartItems.length === 0 ? (
              <Message variant="info" className={classes.carrinhoVazio}>
                <Link to="/">
                  Seu carrinho está vazio, para voltar as compras, clique aqui!
                </Link>
              </Message>
            ) : (
              <LojaCarrinho />
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperContainer}>
              {' '}
              <Typography
                variant="h6"
                gutterBottom
                className={classes.nomeLoja}
              >
                RESUMO
              </Typography>
              <Paper className={classes.paper}>
                {/* Conteudo paper */}
                <Grid item xs={12} container spacing={1}>
                  {/* Informações resumo */}
                  <Grid item xs={8} spacing={1}>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.nomeLoja}
                      >
                        CENTERVALE
                      </Typography>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.resumoNumero}
                      >
                        TOTAL: R$ {totalColinas}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.resumoNumero}
                      >
                        FRETE: R$ 12,99
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Avatar resumo */}
                  <Grid item xs={4} spacing={1}>
                    <Avatar
                      variant="square"
                      src="Imagens/Shoppings/São_José_dos_Campos/CenterVale/Logo 1x1.jpg"
                      className={classes.largeAvatar}
                    />
                    {/* <ImageIcon />
                    </Avatar> */}
                  </Grid>
                </Grid>
                <Grid item xs={12} spacing={1}>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.buttonResumo}
                  >
                    REVISAR
                  </Button>
                </Grid>
              </Paper>
              <EnderecoCarrinho />
              <PagamentoCarrinho paymentMethod={cart.paymentMethod} />
              <TotalCarrinho totalShop={totalGasto} />
              <Grid item xs={12} spacing={1}>
                {error && <Message variant="danger">{error}</Message>}
              </Grid>
              <Grid item xs={12} spacing={1}>
                <Button
                  onClick={placeOrderHandler}
                  variant="contained"
                  color="primary"
                  filled
                  className={classes.buttonFinalizar}
                  disabled={
                    !cart.paymentMethod ||
                    !cart.shippingAddress ||
                    cartItems.length === 0
                  }
                >
                  FINALIZAR COMPRA
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
