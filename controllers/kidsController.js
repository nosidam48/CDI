const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Defining methods for the kidsController
module.exports = {
  // Function to find all kids
  findAllUnsponsored: (req, res) => {
    db.kids.findAll({
      where: {
        need_sponsor: true
      }
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  // Function to let admin search for a kid by first/last name
  kidSearchName: (req, res) => {
    console.log(req.body);
    db.kids.findAll({
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

  // Function to let admin search for a kid by location
  kidSearchLocation: (req, res) => {
    console.log(req.body);
    db.kids.findAll({
      where: {
        location: req.body.searchTerm
      }
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  // Function to add kid from form data
  create: (req, res) => {
    console.log(req.file);
    db.kids.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      grade: req.body.grade,
      location: req.body.location,
      kid_bio: req.body.kid_bio,
      need_sponsor: true,
      profile_image: "/" + req.file.path
    }).then(kidData => res.json(kidData))
      .catch(err => res.status(422).json(err));
  },

  //A database call to find one kid by a passed in id
  findOneKid: (req, res) => {
    console.log(req);
    db.kids.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },

  // Function to update kid from admin edits
  update: (req, res) => {
    db.kids.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(kidData => res.json(kidData))
      .catch(err => res.status(422).json(err));
  },
  // Function to remove kid from db
  remove: (req, res) => {
    console.log("request received")
    db.kids.destroy(
      {
        where: {
          id: req.params.id
        }
      }).then(kidData => res.json(kidData))
      .catch(err => res.status(422).json(err));
  },
};
