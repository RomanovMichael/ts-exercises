function getHiddenCard(cardId: string, starCount = 4): string {
  const COUNT_CHANGED_CHARS = 12;
  
  const cardArray = cardId.split('');

  const stars = "*".repeat(starCount);

  cardArray.splice(0, COUNT_CHANGED_CHARS, stars);
  
  return cardArray.join('')
}

