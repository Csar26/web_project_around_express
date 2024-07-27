const router = require('express').Router();
const {cardsList} = require('../controllers/cards')

router.get('/cards', cardsList);

module.exports = router