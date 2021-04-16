import Product from '../models/productModel.js';
//modulo para lidar com erros em promisses no express
import AsyncHandler from 'express-async-handler';

//@desc Fetch all products
//@route GET /api/products
//@acess public
const getProducts = AsyncHandler(async (req, res) => {
  const produtos = await Product.find({});

  res.json(produtos);
});

//@desc Fetch single product
//@route GET /api/products/:id
//@acess public
const getProductsByID = AsyncHandler(async (req, res) => {
  const produto = await Product.findById(req.params.id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ message: 'Produto não encotrando' });
  }
});
export { getProducts, getProductsByID };
