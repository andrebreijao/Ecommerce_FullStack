import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import listaproduto from './data/lista_produtos.js';

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
