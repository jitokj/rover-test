const path = require('path');
const fs = require("fs");

exports.postRovConfig = (req,res,next)=>{
    if (!req.is('application/json')) {
        res.status(400).send("wrong content type");
    } 
    else {
        const p = path.join(path.dirname(require.main.filename),'data','rovConfig.json');
        fs.readFile(p,(err,fileContent)=>{
            if(!err) {
                if(!fileContent){
                    fs.writeFile(p,{...req.body},(err)=>{
                        if(err){
                            console.log(err);
                            return res.send({"message":"rover configuration not set"})
                        }
                        res.send({"message":"rover configuration saved"})
                    })
                }
        }
    })
    }
}