import express from 'express';
const router = express.Router();

// Controllers
const productController = require("../controllers/product");

// Helpers
const multer = require('../helpers/multer');

router.get("/list", productController.getProduct);
router.post("/list", multer.file_upload.single('featuredImage'), productController.postProduct, multer.body_parse.array());
router.put("/list/:product_id", multer.file_upload.single('featuredImage'), productController.putProduct, multer.body_parse.array());
router.delete("/list/:product_id", productController.deleteProduct);

module.exports = router;