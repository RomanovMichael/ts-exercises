// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки — массив.
// А возвращает функция массив всех анаграмм.
// Если в списке нет анаграммы, то возвращается пустой массив:
var filterAnagrams = function (word, array) {
    var sortedWord = function (word) { return word.split('').sort().join(''); };
    return array.filter(function (el) { return sortedWord(el) === sortedWord(word); });
};
console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
