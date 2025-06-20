const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addReview, updateReview, deleteReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/:isbn', protect, addReview);
router.put('/:isbn/:reviewId', protect, updateReview);
router.delete('/:isbn/:reviewId', protect, deleteReview);

module.exports = router;
