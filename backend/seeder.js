import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuarios from './data/usuarios.js';
import produtos from './data/lista_produtos.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //limpa cache de memória
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //USUÀRIOS
    //Importa os usuários que criamos no sample data e adiciona a database
    const createdUsers = await User.insertMany(usuarios);

    //PRODUTOS
    //Usuário administrador na base que criamos
    const adminUser = createdUsers[0]._id;

    //adiciona o administrador ao produto
    const sampleProdutcs = produtos.map((prod) => {
      return { ...prod, user: adminUser };
    });

    //adiciona o produto a base
    const createdProducts = await Product.insertMany(sampleProdutcs);

    console.log('Dados importados!');
    process.exit();
  } catch (error) {
    //finaliza processo com mensgem de erro
    console.error(`${error}`);
    process.exit(1);
  }
};

//Destroi os dados apenas
const destroyData = async () => {
  try {
    //limpa cache de memória
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Dados destruidos!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

//Commando do terminal via condicional
//Scrip acionado por "node backend/seeder -d" ou "node backend/seeder "
// '-d' significa deletar os dados

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
