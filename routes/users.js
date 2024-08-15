const router = require('express').Router();
const {listUsers, getUser, newUser} = require('../controllers/users');



router.get('/users', listUsers );

router.post('users', newUser);




router.get('/users/:id', getUser);


module.exports = router;