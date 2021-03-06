/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Image from 'material-ui-image';

// funcionalidades
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';

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

  produtoImage: {
    margin: theme.spacing(1),
  },
}));

function ProdutoCarrinho({ sku, titulo, img, preco, qty, loja }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // add and remove itens
  const lessItem = () => {
    dispatch(addToCart(sku, Number(qty) - 1));
  };

  const plusItem = () => {
    dispatch(addToCart(sku, Number(qty) + 1));
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} container spacing={1}>
        {/* secao nome produto */}
        <Grid item xs={12} sm={7} spacing={1}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                {loja === 'clothefashion' ? (
                  <Image
                    src={`../../Imagens/Lojas/S??o_Jos??_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${img}.webp`}
                  />
                ) : (
                  <Image src={img} />
                )}
              </ListItemAvatar>
              <Link to={`/produto/${sku}`} style={{ color: 'black' }}>
                <ListItemText
                  style={{ paddingLeft: '10px' }}
                  primary={titulo}
                  secondary="Descri????o do produto"
                />
              </Link>
            </ListItem>
          </List>
        </Grid>
        {/* secao preco */}
        <Grid item xs={2} spacing={1}>
          <div className={classes.price}>
            {' '}
            <Typography variant="h7">R$ {preco}</Typography>
          </div>
        </Grid>
        {/* secao qty item */}
        <Grid
          item
          xs={2}
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={4} spacing={0}>
            <IconButton
              variant="contained"
              color="black"
              className={classes.button}
              size="small"
              onClick={lessItem}
              disabled={qty < 2}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4} spacing={0}>
            <input type="text" id="n-items" value={Number(qty)} />
          </Grid>
          <Grid item xs={4} spacing={0}>
            <IconButton
              variant="contained"
              color="black"
              className={classes.button}
              size="small"
              onClick={plusItem}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* secao botao remover */}
        <Grid
          item
          xs={1}
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={12}
            spacing={0}
            direction="collumn"
            alignItems="center"
            justify="center"
          >
            <IconButton
              aria-label="delete"
              onClick={() => {
                removeFromCartHandler(sku);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="inset" />
      {/* fim produto */}
    </div>
  );
}

export default ProdutoCarrinho;
