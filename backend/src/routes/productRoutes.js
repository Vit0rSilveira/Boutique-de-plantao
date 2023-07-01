const router = require('express').Router();
const Product = require('../models/Product');
const multer = require('multer');
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/imagens")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    const { nome, codigo, quantidade_disponivel, categoria, descricao, valor } = req.body;
    const imagem = req.file.path
    console.log(categoria)

    try {
        const buscaDB = await Product.findOne({ codigo: codigo });

        if (buscaDB) {
            return res.status(422).json({ message: "Produto já cadastrado." });
        }

        const product = new Product({
            nome,
            codigo,
            quantidade_disponivel,
            categoria,
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

router.get("/codigo/:codigo", async (req, res) => {
    const codigo = req.params.codigo;

    try {
        const product = await Product.findOne({ codigo: codigo });

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.patch("/:codigo", upload.any(), async (req, res) => {
    const findCod = req.params.codigo;
    const { nome, codigo, quantidade_disponivel, valor, descricao } = req.body;
    let imagem = null;

    if (req.files && req.files.length > 0) {
        // Se houver arquivos enviados, atribua o caminho do primeiro arquivo
        imagem = req.files[0].path;
    }

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

        const imagePath = existingProduct.imagem;
        // Remover a imagem anterior se houver uma nova imagem
        if (imagem && imagePath) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Erro ao apagar a imagem" });
                }
                console.log('Imagem removida com sucesso');
            });
            existingProduct.imagem = imagem;
        }

        await existingProduct.save();

        return res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
        // Se houver um erro, apagar a nova imagem que foi enviada
        if (imagem) {
            fs.unlink(imagem, (err) => {
                if (err) {
                    console.error("Erro ao apagar a nova imagem:", err);
                }
            });
        }
        return res.status(500).json({ error: error.message });
    }
});



router.delete("/:codigo", async (req, res) => {
    const findCod = req.params.codigo;
    const existingProduct = await Product.findOne({ codigo: findCod });

    if (!existingProduct) {
        return res.status(422).json({ message: "Produto não encontrado" });
    }

    try {
        const imagemPath = existingProduct.imagem;
        // Apaga a imagem da pasta
        fs.unlink(imagemPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Erro ao apagar a imagem" });
            }
            console.log('Imagem removida com sucesso');
        });

        await Product.deleteOne({ codigo: findCod });

        return res.status(200).json({ message: "Produto removido com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});


module.exports = router;

