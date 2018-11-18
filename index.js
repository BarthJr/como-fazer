const express = require('express')
const app = express()
const axios = require('axios')

const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.get('/', (req, res) => {
  res.render('index.ejs')
})



app.listen(port, err => {
  if(err)
    console.log('error')
  else
    console.log('Como-Fazer Server is running on port: '+port)
})