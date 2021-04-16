import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleWare/errorMiddleWare.js';

//aciona as variáveis de sistema
dotenv.config();

//aciona a base de dados
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// "use" e feito para extender o arquivo para não deixar muito grande
app.use('/api/products', productRoutes);

//middleware para analisar toda request que passa para o backend
//funciona como um filtro, geralmente usa next pra chamar o próximo modulo

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
