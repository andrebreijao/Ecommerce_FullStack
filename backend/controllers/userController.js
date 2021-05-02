import User from '../models/userModel.js';
//modulo para lidar com erros em promisses no express
import AsyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

//@desc  Auth user and get token
//@route POST /api/users/login
//@acess public

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Email ou senha inválida');
  }
});

//@desc  Register a new user
//@route POST /api/users
//@acess public

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error('Usuário já existe');
  }

  //A encripção pode ser feita por aqui ou por middleware do mongoose
  //Middleware Mongoose sendo utilizado
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Dados de usuário inválidos!');
  }
});

//@desc  Get user profile
//@route GET /api/users/profile
//@acess Private

const getUserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('Usuário não encontrado');
  }
});

//@desc  Update user profile
//@route PUT /api/users/profile
//@acess Private

const updateUserProfile = AsyncHandler(async (req, res) => {
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    //password já é criptografada pelo middleware implantado no modelo
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('Usuário não encontrado');
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
