const express = require('express')
const app = express();
const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');

app.use(routesCards);
app.use(routesUsers);

app.get('/*', function (req, res) {
  res.status(404).send({
    message:'NOT FOUND'
  })
})

app.listen(3000);