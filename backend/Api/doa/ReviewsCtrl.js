import RestaurantsDOA from "../doa/RestaurantsDOA.js"

export default class ReviewsCtrl {
static async apiPostReview(req, res, next) {
    try{
        const restaurantsId = req.body.restaurants_id
        const review = req.body.text
        const userInfo = {
            name: req.body.name,
            _id: req.body.user_id
        }
        const date  = new Date()
        const ReviewResponse = await RestaurantsDOA.addReview(
            restaurantsId,
            userInfo,
            review,
            date,
        )
        res.json({status: "success"})
    }catch(e){
        res.status(500).json({error: e.message})
    }
}
static async apiUpdateReview(req, res, next) {
    try{
        const reviewId = req.body.review_id
        const text = req.body.text
        const date = new Date()


        const reviewRespone= await RestaurantsDOA.updateReview(
            reviewId,
            req.body.user_id,
            text,
            date,
        )
        var {error} = reviewRespone
        if (error) {
            res.status(400).json({error})
        }

        if (reviewRespone.modifiedCount === 0) {
            throw new Error(
                "unable to update review - user may not be original poster",
            )
        }
        res.json({status: "success"})
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

static async apiDeleteReview(req, res, next) {
    try{
        const reviewId = req.query.id
        const userId = req.body.user_id
        console.log(reviewId)
        const reviewRespone = await RestaurantsDOA.deleteReview(
            reviewId,
            userId,)
                res.json({status: "success"})
    }
    catch(e){
        res.status(500).json({error: e.message})
    }
}
}