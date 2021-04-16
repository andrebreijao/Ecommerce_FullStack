import express from 'express';
import Product from '../models/productModel.js';
//modulo para lidar com erros em promisses no express
import AsyncHandler from 'express-async-handler';

const router = express.Router();

//@desc Fetch all products
//@route GET /api/products
//@acess public

router.get(
  '/',
  AsyncHandler(async (req, res) => {
    //busca os produtos na base de dados
    const products = await Product.find({});

    res.json(products);
  })
);

//@desc Fetch single product
//@route GET /api/products/:id
//@acess public

router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const produto = await Product.findById(req.params.id);

    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encotrando' });
    }
  })
);

export default router;
