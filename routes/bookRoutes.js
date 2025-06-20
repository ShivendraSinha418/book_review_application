const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Existing book routes above this...

// 🔥 New route to get all reviews for a specific book by ISBN
router.get('/:isbn/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ bookIsbn: req.params.isbn });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
