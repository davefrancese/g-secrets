const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

require('dotenv').config()

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Galvanize Secrets'
  })
})

app.listen(port, () => {
  console.log('listening on port', port);
})
