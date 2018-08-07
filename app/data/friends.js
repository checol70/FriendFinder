
possibleFriends = [
    { name: "Colton", picture:"https://checol70.github.io/responsive-portfolio/assets/images/Profile-Pic.png", scores: [10, 9, 10, 8, 7, 9] }
]

function checkFriends(me, friendArr) {
    var closestFriend
    var closestDifference
    console.log(friendArr)
    friendArr.forEach((friend) => {
        if (friend !== me) {
            var diff = calculateDifferences(me, friend);
            if ((closestDifference === undefined || diff < closestDifference) && friend.name.toLowerCase() !== me.name.toLowerCase()) {
                closestDifference = diff;
                closestFriend = friend;
            }
        }
    })
    return closestFriend;
}
function calculateDifferences(me, friend) {
    var differenceScore = 0
    console.log(me.scores)
    me.scores.forEach(function (myscore, i) {
        var fScore = friend.scores[i];
        if (myscore > fScore) {
            differenceScore += myscore - fScore;
        } else if (fScore > myscore) {
            differenceScore += fScore - myscore;
        }

    })
    return differenceScore;
}
module.exports = {
    check: checkFriends,
    calc: calculateDifferences,
    possible: possibleFriends
}