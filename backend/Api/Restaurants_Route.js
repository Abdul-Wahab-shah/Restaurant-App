import express from "express";
import RestaurantsController from "./RestorntControl.js"; // Change the case here
import ReviewsCtrl from "./doa/ReviewsCtrl.js";// Change the case here
const router = express.Router();
    
router.route("/").get(RestaurantsController.apiGetRestaurants);
router.route("/id/:id").get(RestaurantsController.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsController.apiGetRestaurantCuisines)


router

.route("/review")
.post(ReviewsCtrl.apiPostReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

export default router;