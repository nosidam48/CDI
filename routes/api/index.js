const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");
const contentRoutes = require("./content");
const kidsController = require("../../controllers/kidsController");
// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);
router.use("/content", contentRoutes);

router.route("/donors/:id")
    .get(kidsController.findOneKid)

module.exports = router;
