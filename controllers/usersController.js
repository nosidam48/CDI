const db = require("../models");

// Defining methods for the usersController
module.exports = {
    // Function to let admin search for a donor and connect kid
    findByCriteria: (req, res) => {
        // Create variable to store only search data that admin entered
        let whereStatement = {};
        if (req.body.first_name) {
            whereStatement.first_name = req.body.first_name
        }
        if (req.body.last_name) {
            whereStatement.last_name = req.body.last_name
        }
        if (req.body.email) {
            whereStatement.email = req.body.email
        }
        // Run database search
        db.users.findAll({
            where: whereStatement
        })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    // Function to connect donor to kid
    connectDonor: (req, res) => {        
        console.log(req.body);
        db.users.findOne({
            where: {
                id: req.body.donor_id
            }
        }).then(function(user) {
            db.kids.findOne({
                where: {
                    id: req.body.kid_id
                }
            }).then(function(kid) {
                user.setKids((kid))
            })
        })
    },
};
