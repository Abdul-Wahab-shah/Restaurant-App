// import axios from "axios";
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/restaurants",
    "Content-type": "application/json"
  }
);