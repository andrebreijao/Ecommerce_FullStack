const express = require('express');
const produtos = require('./data/lista_produtos');

const app = express();

app.get('/', (req, res) => {
  res.send('API ta rolando...');
});

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/api/produtos/:id', (req, res) => {
  const produto = produtos.find((p) => p.id == req.params.id);
  res.json(produto);
});

app.listen(5000, console.log('server running on port 5000'));
