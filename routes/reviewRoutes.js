const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protectRoute);
router
  .route('/')
  .get(authController.restrictTo('admin'), reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourAndUserIds,
    reviewController.createReview
  );
router
  .route('/:id')
  .delete(reviewController.deleteReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .get(authController.restrictTo('user', 'admin'), reviewController.getReview);

module.exports = router;
