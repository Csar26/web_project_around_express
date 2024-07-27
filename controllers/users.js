const fs = require('fs/promises');
const path = require('path');

const fileName = path.join(__dirname, '..','data', 'users.json');

function listUsers(req, res) {
  fs.readFile(fileName).then(content => {

     res.send(JSON.parse(content.toString()))
   })

 }

 const getUser = (req, res) => {
  fs.readFile(fileName).then(content => {
    const id = req.params.id
    const usersData= JSON.parse(content.toString());
    const user = usersData.find(user => user._id === id)
    res.send(user)
  })

}

module.exports = {listUsers, getUser}