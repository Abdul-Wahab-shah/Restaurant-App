import app from "./Server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDOA from "../doa/RestaurantsDOA.js"

dotenv.config()
const MongoClient= mongodb.MongoClient
const port =process.env.PORT || 8000

// console.log("🚀 ~ process.env.RESTREVIEWS_DB_URL:", process.env.RESTREVIEWS_DB_URL)

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URL,
    {        
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
    }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
}).then(async client=>{
    await RestaurantsDOA.injectDB(client)
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)})
})