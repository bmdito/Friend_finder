var friendData = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });


    app.post("/api/friends", function(req, res){
        // friendData.push(req.body);
        console.log(req.body);
        var newfriend = req.body.scores
        var diff = '';
        for(var i = 0; i<newfriend.length; i++){
            newfriend[i] - friendData[0].scores[i]

        }
        res.json(friendData[0]);
    });

}

