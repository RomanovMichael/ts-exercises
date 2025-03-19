// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки — массив.
// А возвращает функция массив всех анаграмм.
// Если в списке нет анаграммы, то возвращается пустой массив:

const filterAnagrams = (anagram: string, array: string[]) :string[] => {
    const sortedWord = (word: string) :string => word.split('').sort().join('')

    return array.filter((el) => sortedWord(el) === sortedWord(anagram))
}

// Решена проблема вызова функции сортировки параметра на каждой итерации метода .filter
const filterAnagrams1 = (anagram: string, array: string[]) :string[] => {
    const sortedWord = (word: string) :string => word.split('').sort().join('')
    const standard = sortedWord(anagram)

    return array.filter((el) => sortedWord(el) === standard)
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))