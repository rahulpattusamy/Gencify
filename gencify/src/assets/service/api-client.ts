import axios from "axios";

const apiclient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export default apiclient;
