import express from 'express';
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  updateOrdertoPaid,
  teste,
} from '../controllers/orderController.js';
import protect from '../middleWare/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrdertoPaid);

router.route('/teste/:id').get(protect, teste);

export default router;
