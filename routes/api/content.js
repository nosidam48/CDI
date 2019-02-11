const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb)  => 
    cb(null, "uploads/"),
  filename: (req, file, cb) => 
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage: storage });
const contentController = require("../../controllers/contentController");
const checkJwt = require("../../config/middleware/checkJwt");
  
// Matches with "/api/content/:id"
router.route("/:id")
    .post(upload.single('selectedFile'), checkJwt, contentController.create)

module.exports = router;
