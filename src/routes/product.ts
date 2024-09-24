import express from 'express';
const router = express.Router();

// Controllers
const productController = require("../controllers/product");

router.get("/list", productController.getProduct);

module.exports = router;