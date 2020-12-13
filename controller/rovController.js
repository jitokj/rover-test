const path = require('path');
const fs = require("fs");
const Direction = require("../models/direction");


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

exports.postRovMove = (req,res)=>{
    if (!req.is('application/json')) {
        res.status(400).send("wrong content type");
    } 
    else {
        const direction = req.body.direction;
        if(typeof direction === Direction){
            if(storm){
                return res.status(428).send({"message":"cannot move during a storm"})
            }
            res.send({"message":"success"})
        }
    }
}

exports.getStatus = (req,res)=>{
    const p = path.join(path.dirname(require.main.filename),'data','rovConfig.json');
    fs.readFile(p,(err,fileContent)=>{
        res.send({"data": fileContent});
    })
}