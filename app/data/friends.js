class Friend {
    constructor(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores
        possibleFriends.push(this);
    }

    checkFriends() {
        var closestFriend
        var closestDifference
        possibleFriends.forEach((friend)=> {
            if (friend !== this) {
                var diff = this.calculateDifferences(friend);
                if(closestDifference === undefined || diff < closestDifference){
                    closestDifference =diff;
                    closestFriend = friend;
                }
            }
        })
        return closestFriend;
    }
    calculateDifferences(friend) {
        var differenceScore = 0
        this.scores.forEach(function (myscore, i)  {
            var fScore = friend.scores[i];
            if (myscore > fScore) {
                differenceScore += myscore - fScore;
            } else if (fScore > myscore) {
                differenceScore += fScore - myscore;
            }

        })
        console.log(differenceScore)
        return differenceScore;
    }
}

var possibleFriends = []

var friend1 = new Friend("Juan", "none", [3,2,3,2,1,4]);
var friend2 = new Friend("Colton", "NONE", [10,9,10,8,7,9])
var friend3 = new Friend("Osten", "none", [3,3,4,2,1,4])