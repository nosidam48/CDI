import axios from "axios";

export default {
    // Retrieves all unsponsored kids
    getKidsUnsponsored: function() {
        return axios.get("/api/kids");
    },

    // Searches for kid based on criteria
    kidSearch: function(searchData) {
        // Switch statement to determine which search to run based on admin search type                
        switch(searchData.searchType) {
            case "Name": 
            return axios.post("/api/kids/name/", searchData);

            case "Location": 
            return axios.post("/api/kids/location/", searchData)

            default:
            console.log("something isn't working");
        }        
    },

    // Adds kid to database
    addKid: function(kidData) {
        return axios({
            "method": "POST",
            "url": "/api/kids",
            "data": kidData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        })
    },

    // Edits existing kid info in db
    kidEdit: function(kidData) {
        let id = kidData.id;
        console.log(id);
        return axios.put("/api/kids/" + id, kidData)
    }
};