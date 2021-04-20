import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    nome: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    loja: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
      default: 0,
    },
    sku: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
