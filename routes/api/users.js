const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  // .get(usersController.findAll)
  .post(usersController.findByCriteria);

// Matches with "/api/users/:id"
router.route("/:id")

// Matches with "/api/users/connect"
router.route("/connect")
  .post(usersController.connectDonor);

  // Matches with "/api/users/profile"
router.route("/profile")
  .post(usersController.profileUpdate);

module.exports = router;
