const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// All routes start with "/api/users"
router.route("/")
  .post(usersController.findByCriteria);

router.route("/donor-child")
  .post(usersController.donorKid)

router.route("/connect")
  .post(usersController.connectDonor);

router.route("/profile")
  .post(usersController.profileUpdate);

router.route("/profile-check")
  .post(usersController.getDonor);

router.route("/sponsor-me")
  .post(usersController.sponsorMe)

module.exports = router;
