const mongoose = require('mongoose');

const regExpLink =
  /^((http|https):\/\/)(w{3}\.)?[\w~:/?%#[\]@!$&'()*+,;=]*\/#?/;

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

