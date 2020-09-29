import axios from "axios";

const api = axios.create({
  baseURL: "https://billclintonswag.com/api/search/album?q="
});

export default api;