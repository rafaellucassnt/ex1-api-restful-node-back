const express = require('express');
const router = express.Router();

const lista_produtos = require('../data/lista_produtos');

router.get('/', (req, res) => {
  res.json(lista_produtos.produtos);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = lista_produtos.produtos.find(item => item.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
});

router.post('/', (req, res) => {
  const { id, descricao, valor, marca } = req.body;
  const novoProduto = { id, descricao, valor, marca };

  lista_produtos.produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoIndex = lista_produtos.produtos.findIndex(item => item.id === id);

  if (produtoIndex !== -1) {
    const { descricao, valor, marca } = req.body;
    lista_produtos.produtos[produtoIndex] = { id, descricao, valor, marca };
    res.json(lista_produtos.produtos[produtoIndex]);
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produtoIndex = lista_produtos.produtos.findIndex(item => item.id === id);

  if (produtoIndex !== -1) {
    const produtoRemovido = lista_produtos.produtos.splice(produtoIndex, 1);
    res.json(produtoRemovido[0]);
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
});

module.exports = router;
