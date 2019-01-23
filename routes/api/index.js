const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");

// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);

module.exports = router;
