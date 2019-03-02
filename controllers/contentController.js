const db = require("../models");
require('dotenv').config();
const nodemailer = require('nodemailer');

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
            kid_notes = ""
        };
        // Check if a photo was submitted and store path value or null. 
        if (req.body.kid_pics) {
            kid_pics = req.body.kid_pics
        } else {
            kid_pics = ""
        };
        //create the new entry in the content table
        db.content.create({
            kidId: kidId,
            kid_notes: kid_notes,
            kid_pics: kid_pics
        }).then(data => {
            // Once content has been added, find kid info, including all connected users         
            db.kids.findOne({
                where: {
                    id: kidId
                },
                include: [db.users]
            }).then(userData => {
                // Once user data is retrieved, set mail options and send notification emails
                
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: `${process.env.GMAIL_USER}`,
                        pass: `${process.env.GMAIL_PASSWORD}`,
                    }
                })                
                const mailOptions = {
                    from: 'edcourtney74@gmail.com',
                    to: "edcourtney74@gmail.com",
                    subject: "New update for your sponsored child",
                    text: "We have added a new update about the child you sponsor. Please log in to http://cdi2019.herokuapp.com and visit the Who I Sponsor page. \n Thank you! \n CDI Staff"
                }
                                
                transporter.sendMail(mailOptions, function(err, response) {
                    if (err) {
                        console.error("There was an error: ", err);
                    } else {
                        console.log("Here is the res: ", response);
                        res.status(200).json("Email notification sent");
                    }
                })
            })
        })    
          .catch(err => console.log(err));
        },
}