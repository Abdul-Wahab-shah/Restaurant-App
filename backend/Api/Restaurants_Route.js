import  express  from "express"
import RestaurantsCtrl from "../Api/restaurants_controller"
const router=express.Router()
    
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
export default router