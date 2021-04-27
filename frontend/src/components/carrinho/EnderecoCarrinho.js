/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
  buttonCadastrarEnd: {
    padding: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
}));

function EnderecoCarrinho() {
  const classes = useStyles();

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const { address, city, country, postalCode } = shippingAddress;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* Conteudo paper */}
        <Grid item xs={12} container spacing={1}>
          {/* Informações entregra */}
          {city ? (
            <>
              <Grid item xs={10} spacing={1}>
                <Grid
                  item
                  xs={12}
                  spacing={1}
                  className={classes.enderecoTitulo}
                >
                  Enviar para
                </Grid>
                <Grid item xs={12} spacing={1} className={classes.endereco}>
                  {address}
                </Grid>
                <Grid item xs={12} spacing={1} className={classes.endereco}>
                  {city} , {country}
                </Grid>
                <Grid item xs={12} spacing={1} className={classes.endereco}>
                  CEP {postalCode}
                </Grid>
              </Grid>

              <Grid item xs={9} spacing={1} />

              <Grid item xs={3} spacing={1}>
                <Button
                  size="small"
                  color="primary"
                  className={classes.buttonResumo}
                >
                  <Link to="/shipping">ALTERAR</Link>
                </Button>
              </Grid>
            </>
          ) : (
            <Link
              to="/shipping"
              className={classes.buttonCadastrarEnd}
              variant="contained"
            >
              CADASTRAR ENDEREÇO
            </Link>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default EnderecoCarrinho;
