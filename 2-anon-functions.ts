// Напишите функцию, которая возвращает массив четных чисел из массива numbers.

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// C контекстной типизацией (contextual typing, как в чистом JS) 
const getEvenNumbers1 = () => numbers.filter(num => num % 2 === 0);


// Вне контекста (указываем тип входных параметров)
const even = (num: number)=> num % 2 === 0
const getEvenNumbers = numbers.filter(even);



