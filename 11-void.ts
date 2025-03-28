// Попробуйте самостоятельно определить функцию forEach() для чисел:

// forEach([1, 2, 3], (n) => console.log(n));
// // 1
// // 2
// // 3

// const result = [];
// forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
// Параметры функции:

// Массив чисел
// Анонимная функция, которая принимает на вход число и возвращает void. 
// У этой функции есть необязательный параметр — индекс элемента в массиве

const forEach = (array: number[], callback: (n: number, index: number) => void): void => { 
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}