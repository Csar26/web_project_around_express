const router = require('express').Router();
const fs = require("fs/promises");
const path = require("path");
const { getCards, storeCards, deleteCards, addLike, removeLike} = require("../controllers/cards");




router.get("/cards", getCards);
router.post('/cards', storeCards);
router.delete("/cards", deleteCards);



module.exports = router