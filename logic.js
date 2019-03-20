


function findTheFriend(scores){
    $.get('/api/friends', function(friends){
     var arrLength = friends.length;

     for(var i = 0; i<arrLength; i++){
         calcDiff()
     }
    })
}

function calcDiff (user, friend){
   var diff = 0;
   var count = 0;

    

}