// Задание

// Реализуйте функцию getHiddenCard(). Она принимает на вход номер кредитки, который состоит из 16 цифр,
// в виде строки и возвращает его скрытую версию. Эта версия может использоваться на сайте для отображения. 
// Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.

// Получается, функция заменяет первые 12 символов на звездочки. 
// Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

// Вариант через padStart() и slice()

function getHiddenCard2(cardNumber: string, hiddenPartLength = 4): string {
  const visibleDigitsLine = cardNumber.slice(-4);
  return visibleDigitsLine.padStart(hiddenPartLength + 4, '*');
}

// Вариант через преобразование в массив
function getHiddenCard(cardId: string, starCount = 4): string {
  const changedCharsCount = cardId.length - 4;

  const cardArray = cardId.split('');

  const stars = "*".repeat(starCount);

  cardArray.splice(0, changedCharsCount, stars);
  
  return cardArray.join('')
}
