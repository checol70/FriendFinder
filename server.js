var express = require("express");
var bodyParser = require("body-parser")
var path = require ("path")
var friend = require("./app/data/friends")
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var apiRoutes = require("./app/routing/apiRoutes")(app)
var htmlRoutes = require("./app/routing/htmlRoutes")(app)
console.log("hello world");
app.listen(PORT, function(){
    console.log("server listening on port: "+ PORT);
})
