const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");
const contentRoutes = require("./content");
const adminRoutes = require("./admin");

// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);
router.use("/content", contentRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
