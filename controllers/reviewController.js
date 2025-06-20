const Review = require('../models/Review');
const Book = require('../models/Book');

exports.addReview = async (req, res) => {
  const book = await Book.findOne({ isbn: req.params.isbn });
  const review = new Review({ user: req.user._id, book: book._id, content: req.body.content });
  await review.save();
  res.json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.reviewId);
  if (review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: 'Forbidden' });

  review.content = req.body.content;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.reviewId);
  if (review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: 'Forbidden' });

  await review.remove();
  res.json({ message: 'Review deleted' });
};
