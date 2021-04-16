import express from 'express';
import { authUser, getUserProfile } from '../controllers/userController.js';
import protect from '../middleWare/authMiddleware.js';

const router = express.Router();

//@desc auth user
//@route GET /users/
//@acess public

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
