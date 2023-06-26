const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nome: String,
  codigo: Number,
  quantidade_disponivel: Number,
  descricao: String,
  imagem: {
    data: Buffer,
    contentType: String
  },
  valor: Number,
}, {
  collection: 'products', // nome da coleção no MongoDB
  typeKey: '$type' // chave para especificar o tipo dos campos
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
