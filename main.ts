function getHiddenCard(cardId: string, starCount = 4): string {
  const cardArray = cardId.split(', ') ;

  // for(let i = 0; i < starCount; i++) {
  //   cardArray[i]  = '*'

  // }

  return cardArray.toString()
}
// END

const newCard = getHiddenCard('234242342424323432432432')
console.log(newCard)