const express = require('express');
const envController = require("../controller/envController");


const router = express.Router();


var validate = require('express-jsonschema').validate;

var terainSchema = {
    "id": "/terain",
    "type": 'string',
    "required": true,
    "enum": ['dirt','water','rock','sand']
}


var envConfigSchema = {
    type: 'object',
    properties: {
        temperature: {
            type: 'number',
            required: true
        },
        humidity: {
            type: 'number',
            required: true
        },
        solar_flare: {
            type: 'boolean',
            required: true,
           },
        storm: {
            type: 'boolean',
            required: true,
        },
        area_map: {
            type: 'array',
            required: true
        }
    }
}


router.post("/configure",validate({body:envConfigSchema}),envController.postEnvConfigure);
router.get("/configure",envController.getEnvConfigure);
router.patch("/",envController.patchEnvConfigure);



module.exports = router;