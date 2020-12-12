const path = require('path');
const fs = require("fs");
// let envConfig = [];

module.exports = class Config {
    constructor(temperature,humidity,solar_flare,storm,area_map){
        this.temperature = temperature;
        this.humidity = humidity;
        this.solar_flare = solar_flare;
        this.storm = storm;
        this.area_map = area_map;
    }

    save(){
        const p = path.join(path.dirname(require.main.filename),'data','envConfig.json');
           
            // envConfig.push(this);
             fs.writeFile(p,JSON.stringify(this),(err)=>{
                 console.log(err);
             });

    }

  
   
    static fetchAll (){
        return envConfig;
    }
}