const db = require("../models");

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

  // Function to add kid from form data
  create: (req, res) => {
    db.kids.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      grade: req.body.grade,
      location: req.body.location,
      kid_bio: req.body.kid_bio,
      need_sponsor: req.body.need_sponsor,
      // profileImage: req.file.path
    }).then(kidData => res.json(kidData))
      .catch(err => res.status(422).json(err));
  }

};
