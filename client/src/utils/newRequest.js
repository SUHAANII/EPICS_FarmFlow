import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://44.226.145.213/api/",
  withCredentials: true,
});

export default newRequest;
