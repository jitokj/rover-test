const Config = require("../models/config");
const path = require('path');
const fs = require("fs");

exports.postEnvConfigure = (req,res,next)=>{
    if (!req.is('application/json')) {
        res.status(400).send("wrong content type");
    } 
    else {
    
        const temperature = req.body.temperature;
        const humidity = req.body.humidity;
        const solar_flare = req.body.solar_flare;
        const storm = req.body.storm;
        const area_map = req.body.area_map;

        const envConfiguration = new Config(temperature,humidity,solar_flare,storm,area_map);
            const p = path.join(path.dirname(require.main.filename),'data','envConfig.json');
            fs.readFile(p,(err,fileContent)=>{
                if(!err) {
                    if(!fileContent){
                envConfiguration.save();
                    }
            }
        })
             
             res.status(201).json({"message":"succes"});
    }
   

}

exports.getEnvConfigure = (req,res,next)=>{
    const initialConfig = Config.fetchAll();
    console.log(JSON.stringify(initialConfig));
   res.send(initialConfig);
}

exports.patchEnvConfigure = (req,res,next)=>{
    if (!req.is('application/json')) {
        res.status(400).send("wrong content type");
    } else {
        const p = path.join(path.dirname(require.main.filename),'data','envConfig.json');
        fs.readFile(p,(err,fileContent)=>{
            if(!err) {
                if(fileContent){
                  let envConfig = JSON.parse(fileContent);
                  newData = {...envConfig,...req.body}
                 fs.writeFile(p,JSON.stringify(newData),(err)=>{
                         console.log(err);
                         return res.send({"message":"not updated"})
                     });
        
                }
            }
        })

        res.send({"message": "updated"});
    }

    }
    
