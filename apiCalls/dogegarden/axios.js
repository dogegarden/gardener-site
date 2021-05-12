import axios from "axios";

const axi = axios.create({
  baseURL: "http://api.dogegarden.net/v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default axi