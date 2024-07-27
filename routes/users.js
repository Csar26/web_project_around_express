const router = require('express').Router();
const {getUser, listUsers} = require('../controllers/users');

router.get('/users', listUsers)




router.get('/users/:id', getUser )


module.exports = router;