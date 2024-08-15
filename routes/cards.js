const router = require('express').Router();
//const {cardsList} = require('../controllers/cards')
const fs = require("fs/promises");
const path = require("path");
const { getCards, storeCards, deleteCards, addLike, removeLike} = require("../controllers/cards");




router.get("/cards", getCards);

module.exports = router