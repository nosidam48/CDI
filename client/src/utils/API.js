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

    // Adds kid photo to S3
    addKidPhoto: (kidData) => {
        return axios({
            "method": "POST",
            "url": "/api/kids/image",
            "data": kidData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        })
    },
    
    // Adds kid to database using expanded axios request to handle photo
    addKid: (kidData) => {
        return axios.post("/api/kids", kidData)
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

    //Show 2 random kids on the front page
    homeKids: () => {
        return axios.get("/api/kids/random");
    },

    // From filter search on Kids page
    getKidsSearch: (searchData) => {
        return axios.post("/api/kids/search", searchData)
    },

    // DONOR FUNCTIONS ============================================================
    // Get logged-in donor profile
    getDonor: (email) => {
        return axios.post("/api/users/profile-check", email)
    },

    // Show donor the child they are connected to
    donorKid: (email) => {
        return axios.post("/api/users/donor-child", email)
    },

    //Donor updates profile info
    donorProfile: (profileData) => {
        return axios.post("/api/users/profile", profileData);
    },

    // ADMIN-KID FUNCTIONS==============================================================

    // View all kids
    viewKids: () => {
        return axios.get("/api/admin/viewKids")
    },

    // View all sponsored kids
    viewSponsored: () => {
        return axios.get("/api/admin/viewSponsored")
    },

    // Function for donor search to connect child
    donorSearch: (searchData) => {
        return axios.post("/api/users/", searchData);
    },
    // Function to connect donor to child
    connectDonor: (connectData) => {
        return axios.post("/api/users/connect", connectData);
    },

    // Add content for child, includes expanded axios request to handle photo
    addContent: (contentData) => {
        return axios.post("/api/content", contentData);
    },

    // ADMIN-DONOR FUNCTIONS=======================================================
    viewUsers: () => {
        return axios.get("/api/admin/viewUsers")
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
        // Set admin statuses based on user input
        switch (userData.admin_status) {
            case ("Regular admin status"):
                userData.admin_status = true;
                userData.master_admin_status = false;
                return axios.put("/api/admin/users/" + id, userData);

            case ("Master admin status"):
                userData.admin_status = true;
                userData.master_admin_status = true;
                return axios.put("/api/admin/users/" + id, userData);

            default:
                userData.admin_status = false;
                userData.master_admin_status = false;
                return axios.put("/api/admin/users/" + id, userData);
        }
    },

    removeUser: (id) => {
        return axios.delete("api/admin/users/" + id);
    },

    // ADMIN-ADMIN FUNCTIONS=======================================================
    viewAdmins: () => {
        return axios.get("/api/admin/viewAdmins")
    },
};

