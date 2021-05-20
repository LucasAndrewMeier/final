var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){

    const http = require("https");

    const options = {
        "method": "GET",
        "hostname": "api-nba-v1.p.rapidapi.com",
        "port": null,
        "path": "/teams/league/standard",
        "headers": {
            "x-rapidapi-key": "a9f289b014mshc1ab7b1061e816fp1e1c0bjsnf8fcf8016601",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "useQueryString": true
        }
    };
        
        req = http.request(options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });

    });
    
    req.end();
});

function displayNBAdata(data){
    const nickname = data.nickname[0];
    for(var x = 0;x< nickname.length; x++  ){
        {nickname}
    }
}

module.exports = router;