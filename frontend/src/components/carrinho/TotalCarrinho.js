/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
}));

function TotalCarrinho() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {/* Conteudo paper */}
      <Grid item xs={12} container spacing={1}>
        <Grid item xs={6} spacing={1} className={classes.totalCompra}>
          Total com frete
        </Grid>
        <Grid item xs={6} spacing={1} className={classes.totalCompraValor}>
          R$ 1.203,99
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TotalCarrinho;
