function getHiddenCard(cardId, starCount) {
    if (starCount === void 0) { starCount = 4; }
    var cardArray = cardId.split(', ');
    // for(let i = 0; i < starCount; i++) {
    //   cardArray[i]  = '*'
    // }
    return cardArray.toString();
}
// END
var newCard = getHiddenCard('234242342424323432432432');
console.log(newCard);
