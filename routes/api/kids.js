const router = require("express").Router();
const kidsController = require("../../controllers/kidsController");

// Matches with "/api/kids"
router.route("/")
  .get(kidsController.findAll)
//   .post(booksController.create);

// Matches with "/api/kids/:id"
router
  .route("/:id")
  // .get(kidsController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
