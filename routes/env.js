const express = require('express');
const envController = require("../controller/envController");


const router = express.Router();

router.post("/configure",envController.postEnvConfigure);
router.get("/configure",envController.getEnvConfigure);
router.patch("/",envController.patchEnvConfigure);



module.exports = router;