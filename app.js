const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()

app.set('view engine', 'hbs');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Galvanize Secrets'
  })
})

app.listen(port, () => {
  console.log('listening on port', port);
})
