

const mongoose = require('mongoose');

const regExpLink =
  /^((http|https):\/\/)(w{3}\.)?[\w~:/?%#[\]@!$&'()*+,;=]*\/#?/;

//const { link } = require('../routes/users');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  pronouns: {
    type: String,
    enum: ['they/them', 'she/her', 'he/him', 'other pronouns']
  },
  about: String,
  required: true,
  minlength: 2,
  maxlength: 30,
},
avatar:{
    type: String,
    required: true,
    validate:{
      validator : function (v) {
        return regExpLink.test(v);
      },
      message: "INVALID FORMAT",
    },
},

});



module.exports = mongoose.model('users', userSchema);


/*
const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aroundb');



//const routesUsers = require('./routes/users');
//const routesCards = require('./routes/cards');

const {PORT = 3000} = process.env


const CardModel = require('./models/cards')


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/users");

const cardsRoutes = require("./routes/cards");


app.use(userRoutes);
app.use(cardsRoutes);


app.get('/cards', function (req, res) {
  CardModel.find({}).then(cards => {
    res.send(cards)
  })
  res.status(404).send({
    message:'NOT FOUND'
  })
})

app.post('/*', function (req, res) {

})

app.post('/*', (req, res)=> {

})


app.listen(PORT);
*/