import express from 'express';
const router = express.Router();

// Controllers
const productController = require("../controllers/product");

// Helpers
const multer = require('../helpers/multer');

router.get("/list", productController.getProduct);
router.post("/list", multer.file_upload.single('featuredImage'), productController.postProduct, multer.body_parse.array());

module.exports = router;