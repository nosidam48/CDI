require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
    }
})

const mailOptions = {
    from: 'edcourtney74@gmail.com',
    to: `${user.email}`,
    subject: "A new update for your sponsored child",
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

module.exports = email;