import axios from "axios";

export function getHttpInstance() {
  return axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
