const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookIsbn: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comment: String,
  rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);