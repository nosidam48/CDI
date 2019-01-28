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

// Matches with "/api/kids"
router.route("/")
  .get(kidsController.findAllUnsponsored)
  .post(upload.single('selectedFile'), kidsController.create);

  
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


module.exports = router;
