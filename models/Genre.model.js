const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  information: String,
 

});

const Genre = mongoose.model('Genre', bookSchema);

module.exports = Genre;