var friends = require("../data/friends.js");

module.exports = function(app){
    app.post("/api", function(req, res){
        friends.possible.push({name:req.body.name , scores: req.body.scores})
        res.json(friends.check(friends.possible[friends.possible.length -1], friends.possible));
    })
    app.get("/api", function(req,res){
        res.json(friends.possible)
    })
}