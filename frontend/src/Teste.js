/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Navmaster from './components/nav-bar/eshop/Navmaster';

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navmaster />
      <Grid container spacing={3}>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={12} sm={8}>
            {/* Loja individual */}
            <Paper className={classes.paper}>
              {/* Nome da loja */}
              <Grid item xs={12} spacing={1}>
                <Typography
                  variant="h7"
                  gutterBottom
                  className={classes.nomeLoja}
                >
                  Cloth fashion
                </Typography>
              </Grid>
              <Grid item xs={12} spacing={1}>
                <Typography
                  variant="h8"
                  gutterBottom
                  className={classes.listaProdutos}
                >
                  Lista de Produtos
                </Typography>
              </Grid>

              <Grid item xs={12} container spacing={1}>
                {/* secao nome produto */}
                <Grid item xs={12} sm={7} spacing={1}>
                  <List className={classes.root}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar variant="square">
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                  </List>
                </Grid>
                {/* secao preco */}
                <Grid item xs={2} spacing={1}>
                  <div className={classes.price}>
                    {' '}
                    <Typography variant="h7">R$ 129,90</Typography>
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
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4} spacing={0}>
                    <input type="text" id="n-items" />
                  </Grid>
                  <Grid item xs={4} spacing={0}>
                    <IconButton
                      variant="contained"
                      color="black"
                      className={classes.button}
                      size="small"
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
                    {/* <Button
                      variant="contained"
                      color="black"
                      className={classes.button}
                      size="small"
                      startIcon={<DeleteIcon />}
                    >
                      REMOVER
                    </Button> */}
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Divider variant="inset" />
              {/* fim produto */}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
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
                  <Grid item xs={10} spacing={1}>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.nomeLoja}
                      >
                        COLINAS
                      </Typography>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.resumoNumero}
                      >
                        TOTAL: R$ 200,99
                      </Typography>
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                      <Typography
                        variant="h8"
                        gutterBottom
                        className={classes.resumoNumero}
                      >
                        FRETE: R$ 200,99
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Avatar resumo */}
                  <Grid item xs={2} spacing={1}>
                    <Avatar variant="square">
                      <ImageIcon />
                    </Avatar>
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
              <Paper className={classes.paper}>
                {/* Conteudo paper */}
                <Grid item xs={12} container spacing={1}>
                  {/* Informações entregra */}
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
                      RUA SANTA RITA, 19, centro,
                    </Grid>
                    <Grid item xs={12} spacing={1} className={classes.endereco}>
                      NOVA YORK, MG{' '}
                    </Grid>
                    <Grid item xs={12} spacing={1} className={classes.endereco}>
                      CEP 123.456.789-10
                    </Grid>
                  </Grid>

                  {/* Botao alterar */}
                  <Grid item xs={9} spacing={1} />

                  <Grid item xs={3} spacing={1}>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.buttonResumo}
                    >
                      ALTERAR
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
                {/* Conteudo paper */}
                <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6} spacing={1} className={classes.totalCompra}>
                    Total com frete
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    spacing={1}
                    className={classes.totalCompraValor}
                  >
                    R$ 1.203,99
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
