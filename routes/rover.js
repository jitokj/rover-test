const express = require('express');
const rovController = require("../controller/rovController");


const router = express.Router();


router.post("/configure",rovController.postRovConfig);


module.exports = router;