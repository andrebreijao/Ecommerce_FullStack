import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleWare/errorMiddleWare.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

//aciona as variáveis de sistema
dotenv.config();

//aciona a base de dados
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

//Middleware para permitir formato JSON no body de request (Na autenticação precisa disso, visto que tem JSON no body da request [email e senha])
app.use(express.json());

// "use" e feito para extender o arquivo para não deixar muito grande
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//middleware para analisar toda request que passa para o backend
//funciona como um filtro, geralmente usa next pra chamar o próximo modulo

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
