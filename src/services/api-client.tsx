import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d78fcb03e951467f852c7242aa7b410e"
    }
});