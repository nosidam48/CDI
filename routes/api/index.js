const router = require("express").Router();
const kidRoutes = require("./kids");
const userRoutes = require("./users");
const contentRoutes = require("./content");
const usersController = require("../../controllers/usersController");
const checkJwt = require("../../config/middleware/checkJwt");

// Routes
router.use("/kids", kidRoutes);
router.use("/users", userRoutes);
router.use("/content", contentRoutes);

router.route("/donors/:id")
    .get(usersController.donorKid)

router.route("/admin/viewAdmins")
    .get(usersController.viewAdmins)

router.route("/admin/viewDonors")
    .get(usersController.viewDonors)

router.route("/admin/viewKids")
    .get(usersController.viewAllKids)

router.route("/admin/viewSponsored")
    .get(usersController.viewSponsored)

router.route("/admin/addUser")
    .post(checkJwt, usersController.addUser)

router.route("/admin/editUser")
    .put(checkJwt, usersController.editUser)

router.route("/admin/searchName")
    .post(checkJwt, usersController.userSearchName)

router.route("/admin/searchEmail")
    .post(checkJwt, usersController.userSearchState)

router.route("/admin/users/:id")
    .put(checkJwt, usersController.editUser)
    .delete(checkJwt, usersController.removeUser)

module.exports = router;
