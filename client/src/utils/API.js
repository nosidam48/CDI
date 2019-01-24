import axios from "axios";

export default {
    getKidsUnsponsored: function() {
        return axios.get("/api/kids");
    },

    addKid: function(kidData) {
        return axios.post("api/kids", kidData);
    }

};