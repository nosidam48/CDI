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

    // viewSponsees: (req, res)
    donorKid: (req, res) => {
        db.users.findOne({
            where: {
                id: req.params.id
            },
        }).then(user => user.getKids())
        .then(data => 
            
            db.content.findAll({
                where: {
                    kidId: data[0].dataValues.id
                }
            }).then(data2 => {
                
                let donorObject = {
                    kid: data[0].dataValues,
                    content: data2
                }
                
                res.json(donorObject)
                
            })
        )
        .catch(err => res.status(422).json(err))
      },

      viewAdmins: (req, res) => {
        db.users.findAll({
            where: {
                admin_status: 1
            }
        }).then(data => res.json(data))
      },

      viewDonors: (req, res) => {
          db.users.findAll({
              where: {
                  admin_status: !1
              },
              include: [db.kids]
          }).then(data => res.json(data))
      },

      viewAllKids: (req, res) => {
        db.kids.findAll().then(data => res.json(data))
    },

      viewSponsored: (req,res) => {
          db.kids.findAll({
              where: {
                need_sponsor: false
              }
          }).then(data => res.json(data))
      },

      addUser: (req, res) => {
          
        db.users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            user_address: req.body.address,
            user_city: req.body.city,
            user_state: req.body.state,
            user_zip: req.body.zip,
            admin_status: req.body.admin,
            master_admin_status: 0,

        }).then(userData => res.json(userData))
        .catch(err => res.status(422).json(err))
      },

      editUser: (req, res) => {
        db.kids.update(
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
            state: req.body.userSearchTerm
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
                  [Op.like]: "%" + req.body.userSearchTerm + "%"
                }
              },
              {
                last_name: {
                  [Op.like]: "%" + req.body.userSearchTerm + "%"
                }
              }
            ]
          }
        })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
      },
      

};

    
