import app from "./Server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDOA from "./Api/doa/RestaurantsDOA.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

// Load environment variables
// const { RESTREVIEWS_DB_URL, RESTREVIEWS_NS, PORT } = process.env;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URL,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  }
)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDOA.injectDB(client);
    app.listen(port, () => {
      console.log("Database is Connect Successfully");
    });
  });