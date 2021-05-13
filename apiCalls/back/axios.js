import axios from "axios";

const axi = axios.create({
  baseURL: "http://localhost:3050",
  headers: {
    "Content-type": "application/json"
  }
});

export default axi