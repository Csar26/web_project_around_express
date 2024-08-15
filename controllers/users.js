const router = require("express").Router();
const handleError = require("../utils/handlerError");
const UserInfo = require("../models/users");



const listUsers = (req, res) => {
  UserInfo.find({}).then((user) => {
    res.send(user);
  });
};

const getUser = (req, res) => {
UserInfo.findById(req.params,id).orFail().then(user => {
  res.send(user);
})
.catch((error) => handleError( error, res));
};


const newUser = (req, res) => {
  const {name, about, avatar} = req.body;
  Userinfo.create({name, about, avatar})
  .then((user) => {
    res.send(user);
  })
  .catch((error) => handleError( error, res));
};



module.exports = {listUsers, getUser, newUser};