var friends = require("../data/friends.js");

module.exports = function(app){
    app.post("/api", function(req, res){
        friends.possible.push({name:req.body.name , scores: req.body.scores})
        console.log(friends)
    })
}