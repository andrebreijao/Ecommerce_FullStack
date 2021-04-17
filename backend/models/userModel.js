import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Método para comparar o password inserido no login e password salvo na base de dados
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Middleware para "filtrar" o password no registro. É um método do mongoose para passar por middleware on save.
//Pode ser feita manualmente direto na requisição ou feita por middleware no mongodb
userSchema.pre('save', async function (next) {
  //Em caso de update de email ou nome, é importante que a senha não mude o hash, caso contrário, login não é possível
  if (!this.isModified('password')) {
    next();
  }

  //salt aumenta a segurança da senha, adicionando caracteres a senha
  const salt = await bcrypt.genSalt(10);

  //senha é salva como hash
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
