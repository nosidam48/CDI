const db = require("../models");

// Defining methods for the kidsController
module.exports = {
    // Query to find all kids
    findAll: function(req, res) {
    db.Kids.findAll({})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
};
