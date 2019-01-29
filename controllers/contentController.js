const db = require("../models");

// Defining methods for the kidsController
module.exports = {
    // Function to add content for a kid
    create: (req, res) => {
        // Create variable to store only content data that admin entered
        kidId = req.body.kidId;
        // Check if kid_notes was completed and store value or null. 
        if (req.body.kid_notes) {
            kid_notes = req.body.kid_notes
        } else {
            kid_notes = null
        };
        // Check if a photo was submitted and store path value or null. 
        if (req.file) {
            kid_pics = "/" + req.file.path
        } else {
            kid_pics = null
        };
        //create the new entry in the content table
        db.content.create({
            kidId: kidId,
            kid_notes: kid_notes,
            kid_pics: kid_pics

        }).then(contentData => res.json(contentData))
            .catch(err => console.log(err));
    },
}