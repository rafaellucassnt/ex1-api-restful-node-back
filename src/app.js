const express = require('express')
const produtosRoutes = require('./routes/produtos');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Exercício 1 - Montagem de uma API RESTful - Rafael Lucas ')
})

app.use('/api/produtos', produtosRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado!`)
})
