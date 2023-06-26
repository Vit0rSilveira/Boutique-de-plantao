const productRoutes = require('./routes/productRoutes')
const personRoutes = require('./routes/personRoutes')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT
const PASSWORD_MONGODB = process.env.PASSWORD_MONGODB
const USER_MONGODB = process.env.USER_MONGODB

const app = express()
app.use(cors())

// Forma de ler JSON / middlwares
app.use(
    express.urlencoded({extended: true})
)

app.use(express.json())
app.use('/usuario', personRoutes)
app.use('/produto', productRoutes)

// Rota inicial
app.get("/", (req, res) => {res.json({message: "Oi andrezinho seu linduuu"}).status(200)})

mongoose.connect(`mongodb+srv://${USER_MONGODB}:${PASSWORD_MONGODB}@boutique-de-plantao.0bhfoya.mongodb.net/Boutique-de-plantao`)
.then(() => {
    app.listen(PORT)
    console.log("Conectamos ao Mongo db")
})
.catch((err) => {console.log(err)})