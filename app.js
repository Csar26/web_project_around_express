const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aroundb');

const app = express();

//const routesUsers = require('./routes/users');
//const routesCards = require('./routes/cards');

const {PORT = 3000} = process.env


//const CardModel = require('./models/cards')


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/users");

const cardsRoutes = require("./routes/cards");

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133' // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

app.use(userRoutes);
app.use(cardsRoutes);


app.get('/*', (req, res) => {

  res.status(404).send({
    message:'NOT FOUND'
  })
})

app.post('/*', function (req, res) {

})

app.post('/*', (req, res)=> {
  res.send({message:'NOT FOUND'})
})


app.listen(PORT, () => {
  console.log('ready')
});