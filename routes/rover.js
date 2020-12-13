const express = require('express');
const rovController = require("../controller/rovController");
var validate = require('express-jsonschema').validate;


const router = express.Router();

var rovMovSchema = {
    type: 'object',
    properties: {
        direction: {
            type: 'object',
            required: true
        }
    }
}



router.post("/configure",validate({body:rovMovSchema}),rovController.postRovConfig);
router.post("/move",rovController.postRovMove);
router.get("/status",rovController.getStatus);


module.exports = router;