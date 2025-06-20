const Book = require('../models/Book');
const Review = require('../models/Review');

exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.searchBooks = async (req, res) => {
  const { isbn, author, title } = req.query;
  const books = await Book.find({
    ...(isbn && { isbn }),
    ...(author && { author: new RegExp(author, 'i') }),
    ...(title && { title: new RegExp(title, 'i') })
  });
  res.json(books);
};

exports.getBookReviews = async (req, res) => {
  const { isbn } = req.params;
  const book = await Book.findOne({ isbn });
  const reviews = await Review.find({ book: book._id }).populate('user', 'username');
  res.json(reviews);
};
