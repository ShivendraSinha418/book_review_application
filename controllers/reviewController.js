const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ bookIsbn: req.params.isbn }).populate('user', 'username');
  res.json(reviews);
};

exports.addReview = async (req, res) => {
  const review = new Review({
    bookIsbn: req.params.isbn,
    user: req.user.id,
    comment: req.body.comment,
    rating: req.body.rating
  });
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  review.comment = req.body.comment || review.comment;
  review.rating = req.body.rating || review.rating;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  await review.remove();
  res.json({ message: 'Review deleted' });
};