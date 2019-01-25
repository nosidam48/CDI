const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  // .get(usersController.findAll)
//   .post(booksController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  // .get(usersController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;