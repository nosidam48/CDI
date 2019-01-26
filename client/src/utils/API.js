import axios from "axios";

export default {
    getKidsUnsponsored: function() {
        return axios.get("/api/kids");
    },

    kidSearch: function(searchData) {
        // Switch statement to determine which search to run based on admin search type                
        switch(searchData.searchType) {
            case "Name": 
            console.log(searchData);
            return axios.post("/api/kids/name/", searchData);

            case "Location": 
            return axios.post("/api/kids/location/", searchData)

            default:
            console.log("something isn't working");
        }        
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
    }
};