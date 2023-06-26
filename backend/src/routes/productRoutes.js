const router = require('express').Router();
const Product = require('../models/Product');
const multer = require('multer');
const storage = multer.memoryStorage(); // Armazenamento em memória para acessar os dados binários do arquivo

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Limite de tamanho do arquivo (10 MB)
    },
    fileFilter: (req, file, cb) => {
        // Filtra os tipos de arquivo permitidos (imagens)
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de arquivo inválido. Apenas imagens são permitidas.'));
        }
    },
});

router.post('/', upload.single('imagem'), async (req, res) => {
    const { nome, codigo, quantidade_disponivel, descricao, valor } = req.body;
    const imagem = {
        data: req.file.buffer, // Obtém os dados binários da imagem a partir do arquivo enviado
        contentType: req.file.mimetype // Obtém o tipo de conteúdo da imagem
    };

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

        const modifiedProducts = products.map(product => {
            const modifiedProduct = {
                nome: product.nome,
                codigo: product.codigo,
                quantidade_disponivel: product.quantidade_disponivel,
                descricao: product.descricao,
                imagem: product.imagem,
                valor: product.valor,
            };

            if (product.imagem && product.imagem.data) {
                modifiedProduct.imagem = `http://localhost:3000/imagens/${product._id}`;
            }

            return modifiedProduct;
        });

        return res.status(200).json(modifiedProducts);
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

