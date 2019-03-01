const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  // .get(usersController.findAll)
  .post(usersController.findByCriteria);

// Matches with "api/users/donor-child"
  router.route("/donor-child")
  .post(usersController.donorKid)

  // Matches with "/api/users/connect"
router.route("/connect")
  .post(usersController.connectDonor);

  // Matches with "/api/users/profile"
router.route("/profile")
  .post(usersController.profileUpdate);

router.route("/profile-check")
  .post(usersController.getDonor);

module.exports = router;
