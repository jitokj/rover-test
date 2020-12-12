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

app.use((err,req,res,next)=>{
    console.log(err);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});