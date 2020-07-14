var express = require("express");
var app = express();



app.get("/playstore", (req, res, next) => {
    var gplay = require('google-play-scraper');

    // gplay.developer({devId: "DxCo Games"}).then(console.log);
    gplay.developer({devId: "Development Colors"}).then(result => { 
        res.send(result);
    });
});

app.get("/applestore", (req, res, next) => {
    var store = require('app-store-scraper');

    // store.developer({devId: 284882218}).then(console.log).catch(console.log);

    store.developer({devId: 1499213248}).then(result => { 
        res.send(result);
    });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});