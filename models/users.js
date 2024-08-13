const mongoose = require('mongoose');

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
}
});