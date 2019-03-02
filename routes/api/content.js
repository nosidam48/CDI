const router = require("express").Router();
const contentController = require("../../controllers/contentController");

// Matches with "/api/content/"
router.route("/")
    .post(contentController.create)

module.exports = router;
