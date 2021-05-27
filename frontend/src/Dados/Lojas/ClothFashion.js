import listaprodutoCloth from '../lista_produtosCloth';

const ClothFashion = {
  nomeLoja: 'ClothFashion',
  filtros: [
    {
      nomeFiltro: 'Categoria',
      opcoesFiltro: [
        { id: 1, name: 'Bermudas' },
        { id: 2, name: 'Calças' },
        { id: 3, name: 'Camisetas' },
        { id: 4, name: 'Regatas' },
      ],
    },
    {
      nomeFiltro: 'Tamanho',
      opcoesFiltro: [
        { id: 1, name: 'P' },
        { id: 2, name: 'M' },
        { id: 3, name: 'G' },
        { id: 4, name: 'GG' },
      ],
    },
    {
      nomeFiltro: 'Preço',
      opcoesFiltro: [
        { id: 1, name: 'R$50-R$99,99' },
        { id: 2, name: 'R$100-R$199,99' },
        { id: 3, name: 'R$20-R$49,99' },
      ],
    },
  ],

  logo: './Imagens/Logo-Loja-FIcticia.jpg',

  fotosBanner: [
    'Imagens/Destaques1.jpg',
    'Imagens/Destaques2.jpg',
    'Imagens/Destaques3.jpg',
  ],

  produtos: listaprodutoCloth,
  cssCard: {
    cardGrid: 'card-produto-grid',
    img: 'produto-grid-img',
    nomeProduto: 'card-grid-nome-produto',
    precos: 'card-grid-precos',
    precoAntigo: 'card-grid-preco-antigo',
    precoAtual: 'card-grid-preco-atual',
    precoParcelado: 'card-grid-preco-parcela',
  },
  cssBanner: {
    marginBottom: '2rem',
  },
};

export default ClothFashion;
