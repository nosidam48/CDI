const router = require("express").Router();
const kidsController = require("../../controllers/kidsController");
// 

// Matches with "/api/kids"
router.route("/")
  .get(kidsController.findAllUnsponsored)
  .post(kidsController.create)

// Matches with "/api/kids/image" 
router.route("/image")
  .post(kidsController.uploadProfilePhoto)

// Matches with "/api/kids/:id"/
router.route("/kid/:id")
  .get(kidsController.findOneKid)
  .put(kidsController.update)
  .delete(kidsController.remove);

// Matches with "/api/kids/name"
router.route("/name")
  .post(kidsController.kidSearchName)

// Matches with "/api/kids/location"
router.route("/location")
  .post(kidsController.kidSearchLocation)

// Matches with "/api/kids/random"
router.route("/random")
  .get(kidsController.findRandom)

// Matches with "api/kids/search"
router.route("/search")
  .post(kidsController.kidSearch)


module.exports = router;
