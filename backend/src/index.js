const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT
const PASSWORD_MONGODB = process.env.PASSWORD_MONGODB
const USER_MONGODB = process.env.USER_MONGODB

// Forma de ler JSON / middlwares
app.use(
    express.urlencoded({extended: true})
)

app.use(express.json())

// Rota inicial
app.get("/", (req, res) => {res.json({message: "Teste"}).status(200)})

mongoose.connect(`mongodb+srv://${USER_MONGODB}:${PASSWORD_MONGODB}@boutique-de-plantao.0bhfoya.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT)
    console.log("Conectamos ao Mongo db")
})
.catch((err) => {console.log(err)})