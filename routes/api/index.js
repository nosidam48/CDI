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

router.route("/admin/viewAdmins")
    .get(usersController.viewAdmins)

router.route("/admin/viewDonors")
    .get(usersController.viewDonors)

router.route("/admin/viewKids")
    .get(usersController.viewAllKids)

router.route("/admin/viewSponsored")
    .get(usersController.viewSponsored)

router.route("/admin/addUser")
    .post(usersController.addUser)

router.route("/admin/editUser")
    .put(usersController.editUser)

router.route("/admin/searchName")
    .post(usersController.userSearchName)

router.route("/admin/searchState")
    .post(usersController.userSearchState)



module.exports = router;
