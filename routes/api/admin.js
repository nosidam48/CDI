const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/viewAdmins")
    .get(usersController.viewAdmins);

router.route("/viewDonors")
    .get(usersController.viewDonors);

router.route("/viewKids")
    .get(usersController.viewAllKids);

router.route("/viewSponsored")
    .get(usersController.viewSponsored);

router.route("/addUser")
    .post(usersController.addUser);

router.route("/admin/editUser")
    .put(usersController.editUser);

router.route("/searchName")
    .post(usersController.userSearchName);

router.route("/searchEmail")
    .post(usersController.userSearchState);

router.route("/users/:id")
    .put(usersController.editUser)
    .delete(usersController.removeUser);

module.exports = router;
