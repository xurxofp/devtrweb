var express = require("express");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://devtr.es"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/playstore", (req, res, next) => {
    var gplay = require('google-play-scraper');

    // gplay.developer({devId: "DxCo Games"}).then(console.log);
    gplay.developer({devId: "Development Colors"}).then(result => { 
        res.send(result);
    });
});

app.get("/applestore2", (req, res, next) => {
    var store = require('app-store-scraper');

    // store.developer({devId: 284882218}).then(console.log).catch(console.log);

    store.developer({devId: 1499213248}).then(result => { 
        res.send(result);
    });
});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});