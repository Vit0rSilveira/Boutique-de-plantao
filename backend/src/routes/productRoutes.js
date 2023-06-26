const router = require('express').Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    const { nome, codigo, quantidade_disponivel, descricao, imagem, valor } = req.body;

    try {
        const buscaDB = await Product.findOne({ codigo: codigo });

        if (buscaDB) {
            return res.status(422).json({ message: "Produto já cadastrado." });
        }

        const product = new Product({
            nome,
            codigo,
            quantidade_disponivel,
            descricao,
            imagem,
            valor,
        });

        await product.save();
        return res.status(201).json({ message: "Produto inserido no sistema com sucesso." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;

