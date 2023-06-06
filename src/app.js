const express = require('express')
const produtosRoutes = require('./routes/produtos');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api Restful')
})

app.use('/produtos', produtosRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})
