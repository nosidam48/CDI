import axios from "axios";

export default {
    // KID FUNCTIONS===============================================================
    // Retrieves all unsponsored kids
    getKidsUnsponsored: () => {
        return axios.get("/api/kids");
    },

    // Searches for kid based on criteria
    kidSearch: searchData => {
        // Switch statement to determine which search to run based on admin search type                
        switch (searchData.searchType) {
            case "Name":
                return axios.post("/api/kids/name/", searchData);

            case "Location":
                return axios.post("/api/kids/location/", searchData)

            default:
                console.log("Route error");
        }
    },

    // Adds kid to database
    addKid: (kidData) => {
        return axios({
            "method": "POST",
            "url": "/api/kids",
            "data": kidData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        })
    },

    //to return a single kid by id
    findOneKid: function (id) {
        return axios.get("/api/kids/kid/" + id)
    },

    // Edits existing kid info in db
    kidEdit: (kidData) => {
        let id = kidData.id;
        return axios.put("/api/kids/kid/" + id, kidData)
    },
    // Function to remove child
    removeKid: (id) => {
        return axios.delete("api/kids/kid/" + id);
    },

    //Show 2 kids on the front page
    homeKids: () => {
        return axios.get("/api/kids/random");
    },

    // DONOR FUNCTIONS ============================================================
    // Show donor the child they are connected to
    donorKid: (id) => {
        return axios.get("/api/donors/" + id)
    },

    //Donor updates profile info
    donorProfile: (profileData) => {
        console.log("Update profile request received")
        return axios.post("/api/users/profile", profileData);
    },

    // ADMIN FUNCTIONS==============================================================

    // Function for donor search to connect child
    donorSearch: (searchData) => {
        return axios.post("/api/users/", searchData);
    },
    // Function to connect donor to child
    connectDonor: (connectData) => {
        return axios.post("/api/users/connect", connectData);
    },

    // Add content for child
    addContent: (contentData) => {
        // Extract id from contentData 
        let id = contentData.get("kidId")
        let url = "/api/content/" + id;
        return axios({
            "method": "POST",
            "url": url,
            "data": contentData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        })
    },

    getKidsSearch: (searchData) => {
        return axios.post("/api/kids/search", searchData)
    },

    viewAdmins: () => {
        return axios.get("/api/admin/viewAdmins")
    },

    viewDonors: () => {
        return axios.get("/api/admin/viewDonors")
    },

    viewKids: () => {
        return axios.get("/api/admin/viewKids")
    },

    viewSponsored: () => {
        return axios.get("/api/admin/viewSponsored")
    },

    addUser: (userData) => {
        return axios.post("/api/admin/addUser", userData)
    },

    userSearch: (searchData) => {
        switch (searchData.searchType) {
            case "Name":
                return axios.post("/api/admin/searchName/", searchData);

            case "Email":
                return axios.post("/api/admin/searchEmail/", searchData)

            default:
                console.log("Route error");
        }
    },

    userEdit: (userData) => {
        let id = userData.id;
        return axios.put("/api/admin/users/" + id, userData)
    },

    removeUser: (id) => {
        return axios.delete("api/admin/users/" + id);
    },

};

