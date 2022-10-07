
import axios from "axios";

const TOKEN = "ccvrq0qad3i1q4rcpingccvrq0qad3i1q4rcpio0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params : {
        token:TOKEN
    }
})