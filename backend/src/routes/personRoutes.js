const router = require('express').Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
    const { nome, tipo, email, senha, tel, endereco, numero, cidade, bairro, estado, complemento } = req.body

    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!regex.test(senha)) {
        return res.status(422).json({ message: "Formato de senha inválido. Digite 8 dígitos contendo número e letras" })
    }

    const person = {
        nome,
        tipo,
        email,
        senha,
        tel,
        endereco,
        numero,
        cidade,
        bairro,
        estado,
        complemento
    }

    try {
        await Person.create(person)
        return res.status(201).json({ message: "Usuário Inserido no sistema com sucesso" })

    } catch (error) {
        return res.status(500).json({ error: error })
    }
}) 

router.get('/', async(req, res) => {
    try {
        const people = await Person.find()
        return res.status(200).json(people)
    } catch(error) {
        return res.status(500).json({error: error})
    }
})


router.get('/:email', async(req,res) => {
    const findEmail = req.params.email
    try {
        const person = await Person.findOne({email: findEmail})

        if (!person) {
            return res.status(422).json({message: "Usuário não encontrado"})
        }
        return res.status(200).json(person)
    } catch(error) {
        return res.status(500).json({error: error})
    }
})


router.patch("/:email", async (req, res) => {
    const findEmail = req.params.email
    const { nome, tipo, email, senha, tel, endereco, numero, cidade, bairro, estado, complemento } = req.body
    
    const person = {
        nome,
        tipo,
        email,
        senha,
        tel,
        endereco,
        numero,
        cidade,
        bairro,
        estado,
        complemento
    }

    try {
        const updatePerson = await Person.updateOne({email: findEmail}, person)

        if (updatePerson.matchedCount === 0) {
            return res.status(422).json({message: "Usuário não encontrado"})
        }

        return res.status(200).json({message: "Usuário atualizado com sucesso"})
    } catch(error) {
        return res.status(500).json({error: error})
    }   
})

router.delete("/:email", async(req, res) => {
    const findEmail = req.params.email

    const person = await Person.findOne({email: findEmail})

    if (!person) {
        return res.status(422).json({message: "Usuário não encontrado"})
    }

    try {
        await Person.deleteOne({email: findEmail})

        return res.status(200).json({message: "Usuário removido com sucesso"})
    } catch(error) {
        return res.status(500).json({error: error})
    } 
})

module.exports = router