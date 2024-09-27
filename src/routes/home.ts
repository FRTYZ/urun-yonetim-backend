import express from 'express';
const router = express.Router();

// Controllers
const homeController = require("../controllers/home");

router.get("/", homeController.getHome);

module.exports = router;