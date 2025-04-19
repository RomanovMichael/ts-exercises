// Typescript: Rest и Spread
// Сегодня разберем rest- и spread-операторы.

// Rest-оператор
// Rest-оператор позволяет создавать функции с переменным числом параметров, при этом сворачивать их в массив:

// function max(...numbers: number[]): number {
//   return Math.max(...numbers);
// }
// Этот массив является обычным параметром функции, поэтому ему задается тип в соответствии с тем, какие значения ожидаются внутри этого массива. Пример с двумя параметрами:

// function do(operation: string, ...numbers: number[]) {
//   // выполняем операцию operation для всех numbers
// }
// В этом смысле rest-оператор в TypeScript ничем не отличается от rest-оператора в JavaScript. А вот со spread-оператором есть одна особенность.

// Spread-оператор
// Spread-оператор в функциях — это как rest-оператор наоборот. Он позволяет раскладывать массив на отдельные параметры:

// const numbers = [1, 2, 3];
// Math.max(...numbers);
// Если функция принимает на вход любое количество аргументов, как в примере выше, то такой код работает без проблем. Но если функция принимает на вход определенное число аргументов, то TypeScript выдаст ошибку компиляции:

// function sum(a: number, b: number): number {
//   return a + b;
// }

// // Выведенный тип number[] — "ноль или больше чисел",
// // а не "массив из двух чисел"
// const args = [1, 2];
// sum(...args);
// // A spread argument must either have a tuple type
// // or be passed to a rest parameter.
// В примере выше TypeScript не может понять, что массив args состоит из двух чисел. Массивы в JavaScript изменяемы, поэтому TypeScript не может полагаться на количество элементов в конкретный момент времени. Есть разные способы обойти это ограничение. Но в этой ситуации проще использовать Type Assertion — указание компилятору, что мы точно знаем о коде:

// const args = [1, 2] as const;
// Подробнее о Type Assertion поговорим в модуле о типах. С его помощью мы явно указываем, что этот массив состоит из двух конкретных значений, которые не поменяются.

// Задание
// Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.


function max(first: number, ...rest: number[]): number {
  return Math.max(first, ...rest);
}
