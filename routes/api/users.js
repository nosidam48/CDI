const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const checkJwt = require("../../config/middleware/checkJwt");

// Matches with "/api/users"
router.route("/")
  // .get(usersController.findAll)
  .post(checkJwt, usersController.findByCriteria);

// Matches with "/api/users/connect"
router.route("/connect")
  .post(checkJwt, usersController.connectDonor);

module.exports = router;
