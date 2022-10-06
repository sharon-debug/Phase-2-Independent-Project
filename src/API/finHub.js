import axios from "axios";

const TOKEN = "ccv1c8iad3iaeesde1rgccv1c8iad3iaeesde1s0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params : {
        token:TOKEN
    }
})