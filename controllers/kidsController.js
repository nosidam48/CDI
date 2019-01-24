const db = require("../models");

// Defining methods for the kidsController
module.exports = {
    // Query to find all kids
    findAllUnsponsored: function(req, res) {
    db.kids.findAll({
      where: {
        need_sponsor: true
      }
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
};
