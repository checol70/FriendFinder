
possibleFriends = [
    { name: "Juan", scores: [3, 2, 3, 2, 1, 4] },
    { name: "Colton", scores: [10, 9, 10, 8, 7, 9] },
    { name: "Osten", scores: [3, 3, 4, 2, 1, 4] }
]

function checkFriends(me, friendArr) {
    var closestFriend
    var closestDifference
    friendArr.forEach((friend) => {
        if (friend !== me) {
            var diff = me.calculateDifferences(friend);
            if (closestDifference === undefined || diff < closestDifference) {
                closestDifference = diff;
                closestFriend = friend;
            }
        }
    })
    return closestFriend;
}
function calculateDifferences(me, friend) {
    var differenceScore = 0
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