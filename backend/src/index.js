const express = require('express')

const app = express()

const PORT = 3000

// Forma de ler JSON / middlwares
app.use(
    express.urlencoded({extended: true})
)

app.use(express.json())

// Rota inicial
app.get("/", (req, res) => {res.json({message: "Teste"}).status(200)})

app.listen(PORT, () => {console.log(`Servidor está ouvindo na porta ${PORT}`)})