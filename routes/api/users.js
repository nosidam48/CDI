const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  // .get(usersController.findAll)
  .post(usersController.findByCriteria);

// Matches with "/api/users/:id"
router.route("/:id")
  // .get(usersController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// Matches with "/api/users/connect"
router.route("/connect")
  .post(usersController.connectDonor);

module.exports = router;
