import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//protect é um middleware utlizado para proteger um determinada route, ele verifica se o token é valido e deixa passar se for

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //middleware que verifica o token enviado no get request para o profile do usuário
  // o token é enviado no HEADER do get e por conversar tem um Bearer bo início do pedido mais o número do token ex: token = 001 hearder vai ter "Bearer 001"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Não autorizado, token falhou ');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, sem token');
  }
});

export default protect;
