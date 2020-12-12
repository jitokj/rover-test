const express = require('express')
const app = express()
const port = 3000
const envRoutes = require("./routes/env");
const rovRoutes = require("./routes/rover");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



app.use("/api/environment",envRoutes);
app.use("/api/rover",rovRoutes);


app.use(function(err, req, res, next) {
 
    var responseData;
 
    if (err.name === 'JsonSchemaValidation') {
        // Log the error however you please
        console.log(err.message);
        // logs "express-jsonschema: Invalid data found"
 
        // Set a bad request http response status or whatever you want
        res.status(400);
 
        // Format the response body however you want
        responseData = {
           statusText: 'Bad Request',
           jsonSchemaValidation: true,
           validations: err.validations  // All of your validation information
        };
 
        // Take into account the content type if your app serves various content types
        if (req.xhr || req.get('Content-Type') === 'application/json') {
            res.json(responseData);
        } else {
            // If this is an html request then you should probably have
            // some type of Bad Request html template to respond with
            res.render('badrequestTemplate', responseData);
        }
    } else {
        // pass error to next error middleware handler
        next(err);
    }
});

app.use((err,req,res,next)=>{
    console.log(err);
});

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});