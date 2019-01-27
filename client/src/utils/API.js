import axios from "axios";

export default {
    getKidsUnsponsored: function() {
        return axios.get("/api/kids");
    },

    addKid: function(kidData) {
        for (var pair of kidData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        };
        return axios({
            "method": "POST",
            "url": "/api/kids",
            "data": kidData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        })
    },

    findOneKid: function() {
       return axios.get("/api/kids/1")
    }
};
