import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import protect from '../middleWare/authMiddleware.js';

const router = express.Router();

//@desc auth user
//@route GET /users/
//@acess public

router.post('/', registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
