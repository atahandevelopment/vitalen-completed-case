import axios from "axios";

const baseUrl = import.meta.env.VITE_MOVIE_API;
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
        "Content-Type": "application/json"
    }
})

export default api;