import axios from "axios";

export default {
    // EXAMPLE FUNCTION
    getKidsUnsponsored: function() {
        console.log("API file received request")
        return axios.get("/api/kids");
    }

};