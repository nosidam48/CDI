const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");
const contentRoutes = require("./content");
const usersController = require("../../controllers/usersController");
// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);
router.use("/content", contentRoutes);

router.route("/donors/:id")
    .get(usersController.donorKid)

module.exports = router;
