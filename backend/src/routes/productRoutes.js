const router = require('express').Router();
const Product = require('../models/Product');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/imagens")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }

})

const upload = multer({storage});

router.post('/', upload.single('file'), async (req, res) => {
    const { nome, codigo, quantidade_disponivel, descricao, valor } = req.body;
    const imagem = req.file.path

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

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});


router.get("/:texto", async (req, res) => {
    const termoPesquisa = req.params.texto;

    try {
        const products = await Product.find({
            $or: [
                { nome: { $regex: termoPesquisa, $options: "i" } },
                { categoria: { $regex: termoPesquisa, $options: "i" } }
            ]
        });

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});

router.patch("/:codigo", async (req, res) => {
    const findCod = req.params.codigo;
    const { nome, codigo, quantidade_disponivel, valor, descricao, imagem } = req.body;

    try {
        const existingProduct = await Product.findOne({ codigo: findCod });

        if (!existingProduct) {
            return res.status(422).json({ message: "Produto não encontrado" });
        }

        existingProduct.nome = nome || existingProduct.nome;
        existingProduct.codigo = codigo || existingProduct.codigo;
        existingProduct.quantidade_disponivel = quantidade_disponivel || existingProduct.quantidade_disponivel;
        existingProduct.valor = valor || existingProduct.valor;
        existingProduct.descricao = descricao || existingProduct.descricao;
        existingProduct.imagem = imagem || existingProduct.imagem;

        await existingProduct.save();

        return res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


module.exports = router;

