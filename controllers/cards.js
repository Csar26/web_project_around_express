/*const fs = require('fs/promises');
const path = require("path");

const fileName = path.join(__dirname, '..','data', 'cards.json');


const cardsList = (req, res)=> {
  fs.readFile(fileName).then(content => {
    //console.log(content.toString());
    res.send(JSON.parse(content.toString()))
  })
}*/

const CardModel = require('../models/cards')

function getCards(req, res){
  CardModel.find({}).then(cards => {
    res.send(cards)
  })
  res.status(404).send({
    message:'NOT FOUND'
  })

}

function storeCards(req, res){
  const id = req.params.id;
  const {name, link} = req.body;
  CardModel.create({name,link, owner: req.user._id})
  .then(card => {
    res.send(card)
  }).catch(error => {
    res.status(403).send(error);
  })

}

function deleteCards(req, res){
  const id = req.params.id;
  CardModel.findByIdAndDelete(id).orFail().then(()=> {
    res.send({status: true})
  }).catch(error => {
     res.status(404).send(error)
  })

}

function addLike(req, res){
  const id = req.params.id;

  CardModel.findByIdAndUpdate(
     id,
    { $addToSet: { likes: req.user._id } }, // agrega _id al array si aún no está ahí
    { new: true },
  )
   .orFail()
   .then((card) => {})
   . catch((error) => {});


}

function removeLike(req, res){
  const id = req.params.id;

}


module.exports = {cardsList}