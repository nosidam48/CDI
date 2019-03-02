const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Defining methods for the usersController
module.exports = {
    // Function to retrieve donor profile info
    getDonor: (req, res) => {
        db.users.findOne({
            where: {
                email: req.body.email
            }
        }).then(userData => res.json(userData))
    },

    // Function to let donor update profile
    profileUpdate: (req, res) => {
        // See if user is already in the database
        db.users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (data) {
            if (!data) {
                db.users.create(req.body)
                    .then(userData => res.json(userData))
                    .catch(err => res.status(422).json(err));
            } else {
                db.users.update(req.body,
                    {
                        where: {
                            email: req.body.email
                        }
                    }
                )
                    .then(userData => res.json(userData))
                    .catch(err => res.status(422).json(err));
            }
        })
    },

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
        db.users.findOne({
            where: {
                id: req.body.donor_id
            }
        }).then(function (user) {
            db.kids.findOne({
                where: {
                    id: req.body.kid_id
                }
            }).then(function (kid) {
                user.setKids((kid))
            }).then(function (data) {
                db.kids.update(
                    {
                        need_sponsor: false
                    },
                    {
                        where: {
                            id: req.body.kid_id
                        }
                    })
            }).then(data => res.json(data))
                .catch(err => res.status(422).json(err))
        })
    },

    // Function to display kid data for whom donor sponsors
    donorKid: (req, res) => {
        db.users.findOne({
            where: {
                email: req.body.email
            },
        }).then(user => {
            // Check to see if donor is already in database. If not, send back message
            if (!user) {
                res.send("Not a sponsor")
            } else {
                user.getKids()
                    .then(data => {
                        // If no data was returned (donor is not sponsoring a child), send back message
                        if (data.length === 0) {
                            res.send("Not a sponsor")
                        } else {
                            // If donor is sponsoring a child, send child info, sorting content by created date
                            db.content.findAll({
                                where: {
                                    kidId: data[0].dataValues.id
                                },
                                order: [['createdAt', 'DESC']]
                            }).then(data2 => {
                                let donorObject = {
                                    kid: data[0].dataValues,
                                    content: data2
                                }
                                res.json(donorObject)
                            })
                        }
                    })
            }
        }).catch(err => res.status(422).json(err))
    },

    viewAdmins: (req, res) => {
        db.users.findAll({
            where: {
                admin_status: 1
            }
        }).then(data => res.json(data))
    },

    viewUsers: (req, res) => {
        db.users.findAll({
            include: [db.kids]
        }).then(data => res.json(data))
    },

    viewAllKids: (req, res) => {
        db.kids.findAll().then(data => res.json(data))
    },

    viewSponsored: (req, res) => {
        db.kids.findAll({
            where: {
                need_sponsor: false
            }
        }).then(data => res.json(data))
    },

    addUser: (req, res) => {
        // Convert admin response received to db booleans
        let admin = false;
        let masterAdmin = false;

        switch(req.body.admin) {
            case ("Regular admin status"):
                admin = true;
                break;
            case ("Master admin status"):
                admin = true;
                masterAdmin = true;
                break;
        }
               
        // Make sure user doesn't already exist in the database
        db.users.findOne({
            where: {
                email: req.body.email
            },
        }).then(data => {
            // If a record was found, send back message to admin
            if (data) {
                res.send("Already exists.")
            } else {
                // If no record, Add new user to the database
                db.users.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip,
                    admin_status: admin,
                    master_admin_status: masterAdmin,
                })
                    .then(userData => res.json(userData))
                    .catch(err => res.status(422).json(err));
            }
        })
    },

    editUser: (req, res) => {
        db.users.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(userData => res.json(userData))
            .catch(err => res.status(422).json(err));
    },

    userSearchState: (req, res) => {
        db.users.findAll({
            where: {
                email: req.body.searchTerm
            }
        })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    userSearchName: (req, res) => {
        db.users.findAll({
            where: {
                [Op.or]: [
                    {
                        first_name: {
                            [Op.like]: "%" + req.body.searchTerm + "%"
                        }
                    },
                    {
                        last_name: {
                            [Op.like]: "%" + req.body.searchTerm + "%"
                        }
                    }
                ]
            }
        })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    removeUser: (req, res) => {
        db.users.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then(userData => res.json(userData))
            .catch(err => res.status(422).json(err));
    },
};


