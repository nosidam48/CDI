const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb)  => 
    cb(null, "./uploads/"),
  filename: (req, file, cb) => 
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage: storage });
const kidsController = require("../../controllers/kidsController");

// Matches with "/api/kids"
router.route("/")
  .get(kidsController.findAllUnsponsored)
  .post(upload.single('selectedFile'), kidsController.create);
   
// Matches with "/api/kids/:id"
router
  .route("/:id")
  // .get(kidsController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
