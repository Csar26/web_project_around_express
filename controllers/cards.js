const fs = require('fs/promises');
const path = require("path");

const fileName = path.join(__dirname, '..','data', 'cards.json');


const cardsList = (req, res)=> {
  fs.readFile(fileName).then(content => {
    //console.log(content.toString());
    res.send(JSON.parse(content.toString()))
  })
}

module.exports = {cardsList}