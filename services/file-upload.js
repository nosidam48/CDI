var aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Config keys for aws account
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: "us-east-2"
})

// Creates new instance of aws S3
const s3 = new aws.S3();

// Checks to make sure the image file is either a jpeg or png
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(new Error("Invalid Mime Type. Please use only a JPEG or PNG"), false)
    }
}

// Variable for uploaded file
const upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: 'cdi-2019',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null);
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;