const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.searchBooks = async (req, res) => {
  const { isbn, author, title } = req.query;
  const filter = {};
  if (isbn) filter.isbn = isbn;
  if (author) filter.author = new RegExp(author, 'i');
  if (title) filter.title = new RegExp(title, 'i');

  const books = await Book.find(filter);
  res.json(books);
};