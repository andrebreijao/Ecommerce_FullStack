import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import protect from '../middleWare/authMiddleware.js';

const router = express.Router();

//@desc auth user
//@route GET /users/
//@acess public

router.route('/').post(protect, addOrderItems);

export default router;
