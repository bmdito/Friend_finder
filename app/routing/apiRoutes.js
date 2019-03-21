var friendData = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });


    app.post("/api/friends", function(req, res){
        // friendData.push(req.body);
        console.log(req.body);
        var bestMatch = {
            name:'',
            photo: '',
            friendDiff : 1000
        };
       
        // parse new users posts
        var newFriend = req.body;
        var newFriendScore = req.body.scores;

        var userName = newFriend.name;
        var userPhoto = newFriend.photo;

        // use this to calculate difference between survey answers between friends
        var totalDiff = 0;

        for(var i=0; i<friendData.length; i++){
            totalDiff = 0;
            
            
            for(var j = 0; j<10; j++){
            totalDiff += Math.abs(parseInt(newFriendScore[j]) - parseInt(friendData[i].scores[i]));
            
            // if the difference is less than the diff between last friend
                if(totalDiff < bestMatch.friendDiff){
                //   update best match with that friends data      
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.friendDiff = totalDiff;
                }
            }
        
        }

        // pushes the newly entered survey to the database
        friendData.push(newFriend);

        res.json(bestMatch);
    });

};

