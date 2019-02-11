const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb)  => 
    cb(null, "uploads/"),
  filename: (req, file, cb) => 
    cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage: storage });
const kidsController = require("../../controllers/kidsController");
const checkJwt = require("../../config/middleware/checkJwt");

// Matches with "/api/kids"
router.route("/")
  .get(kidsController.findAllUnsponsored)
  .post(upload.single('selectedFile'), checkJwt, kidsController.create);

  
  // Matches with "/api/kids/:id"/
  router.route("/kid/:id")
    .get(kidsController.findOneKid)
    .put(checkJwt, kidsController.update)
    .delete(checkJwt, kidsController.remove);
  
  // Matches with "/api/kids/name"
  router.route("/name")
    .post(checkJwt, kidsController.kidSearchName)
  
    // Matches with "/api/kids/location"
  router.route("/location")
    .post(checkJwt, kidsController.kidSearchLocation)

  // Matches with "/api/kids/random"
  router.route("/random")
    .get(kidsController.findRandom)

  // Matches with "api/kids/search"
  router.route("/search")
    .post(checkJwt, kidsController.kidSearch)

module.exports = router;
