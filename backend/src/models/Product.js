const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nome: String,
  codigo: Number,
  categoria: String,
  quantidade_disponivel: Number,
  descricao: String,
  imagem: String,
  valor: Number,
}, {
  collection: 'products',
  typeKey: '$type'
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
