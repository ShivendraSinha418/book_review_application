const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: { type: String, unique: true, required: true },
  title: String,
  author: String,
  description: String
});

module.exports = mongoose.model('Book', bookSchema);