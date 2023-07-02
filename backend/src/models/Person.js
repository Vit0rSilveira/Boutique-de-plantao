const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    nome : String,
    tipo: String,
    email: String,
    senha: String,
    tel: String,
    endereco: String,
    cep: String,
    cidade: String,
    bairro: String,
    estado: String,
    complemento: String,
}, 'people')

module.exports = Person