const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");
const contentRoutes = require("./content");

// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);
router.use("/content", contentRoutes);

module.exports = router;
