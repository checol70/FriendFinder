var express = require("express");
var bodyParser = require("body-parser")
var path = require ("path")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    // load homepage.
})


app.listen(PORT, function(){
    console.log("server listening on port: "+ PORT);
})