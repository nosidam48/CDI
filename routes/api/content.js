const router = require("express").Router();
const contentController = require("../../controllers/contentController");

// Matches with "/api/content"
router.route("/")

  
// Matches with "/api/content/:id"
router.route("/:id")
    .post(contentController.create)

module.exports = router;
