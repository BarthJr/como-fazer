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

app.get('/', async(req, res) => {
  const content = await axios.get('https://como-fazer-barth.firebaseio.com/teste.json')
  console.log(content.data)
  res.render('index.ejs', {i: content.data})
})



app.listen(port, err => {
  if(err)
    console.log('error')
  else
    console.log('Como-Fazer Server is running on port: '+port)
})