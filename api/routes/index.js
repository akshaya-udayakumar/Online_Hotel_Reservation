var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

//Home Page
router 
    .route('/')
    .get(ctrlUsers.LandingPage);

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

//to get reviews
/*
router
    .route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll);

router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne);
    
*/
router
    .route('/signUpPage')
    .get(ctrlUsers.SignupPage);

router
    .route('/signUp')
    .post(ctrlUsers.AddUser);

router 
    .route('/login')
    .post(ctrlUsers.VerifyUser);

router 
    .route('/signUpUnameExists')
    .post(ctrlUsers.signUpUnameExists);

module.exports = router;