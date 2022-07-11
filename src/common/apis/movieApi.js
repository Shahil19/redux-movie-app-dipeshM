import axios from "axios";

export default axios.create({
    baseURL: "https://www.omdbapi.com/"
})

/* const movieApi = axios.create({
    baseURL: "https://www.omdbapi.com/"
})

export default movieApi; */