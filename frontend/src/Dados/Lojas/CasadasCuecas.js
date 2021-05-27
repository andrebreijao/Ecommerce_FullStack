import listaprodutoCueca from '../lista_produtosCueca copy';

const CasadasCuecas = {
  nomeLoja: 'CasadasCuecas',
  filtros: [
    {
      nomeFiltro: 'Categoria',
      opcoesFiltro: [
        { id: 1, name: 'Cueca' },
        { id: 2, name: 'pijama' },
        { id: 3, name: 'Meias' },
        { id: 4, name: 'Sunga' },
        { id: 5, name: 'Calças' },
        { id: 6, name: 'Blusas' },
        { id: 7, name: 'Blusa e Jacqueta Térmica' },
      ],
    },
  ],

  logo:
    './Imagens/Lojas/São_José_dos_Campos/CenterVale/Casa_das_Cuecas/logo-1360239649826.png',

  fotosBanner: [
    'Imagens/Lojas/São_José_dos_Campos/CenterVale/Casa_das_Cuecas/1170x500_classicos.webp',
  ],

  produtos: listaprodutoCueca,
  cssCard: {
    cardGrid: 'card-produto-gridCueca',
    img: 'produto-grid-imgCueca',
    nomeProduto: 'card-grid-nome-produtoCueca',
    precos: 'card-grid-precosCueca',
    precoAntigo: 'card-grid-preco-antigoCueca',
    precoAtual: 'card-grid-preco-atualCueca',
    precoParcelado: 'card-grid-preco-parcelaCueca',
  },
  cssBanner: {
    marginBottom: '6rem',
  },
};

export default CasadasCuecas;
