import express from 'express';
import {
  getProducts,
  getProductsByID,
} from '../controllers/productController.js';

const router = express.Router();

//@desc Fetch all products
//@route GET /api/products
//@acess public

router.route('/').get(getProducts);

//@desc Fetch single product
//@route GET /api/products/:id
//@acess public

router.route('/:id').get(getProductsByID);

export default router;
