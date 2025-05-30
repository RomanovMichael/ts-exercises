// Typescript: Многомерные массивы
// В этом уроке мы рассмотрим многомерные массивы.

// Работа с многомерными массивами
// Чтобы определить многомерные массивы, нужно использовать синтаксис Type[][]. Дословно это означает, что перед нами массив, который содержит массивы со значениями типа Type. Несколько примеров:

// // Тип number[][] выводится автоматически
// const items1 = [[3, 8], [10, 4, 8]];

// const items2: number[][] = []
// // или так Array<number[]>

// // Используя псевдоним
// type User = {
//   name: string;
// }

// // или так Array<User[]>
// const users: User[][] = [
//   [{ name: 'Eva'}, { name: 'Adam' }],
// ];
// Добавление в такие массивы немассивов приведет к ошибке типизации:

// items1.push(99); // Error: Type 'number' is not assignable
// Чтобы определить массивы составных типов, нужно использовать скобки:

// const coll: (string | number)[][] = [];
// coll.push(['hexlet', 5])
// Также можно использовать синтаксис Array<Array<Type>>. В примере ниже массив, внутри которого находятся массивы, содержащие значения типа Type:

// const coll: Array<Array<string | number>> = [];
// coll.push(['hexlet', 5])
// Сами массивы при этом могут быть частью объекта. Технически это позволяет создавать бесконечную вложенность из объектов и массивов:

// type Course = {
//   name: string;
//   lessons: Lesson[];
// }

// type Lesson = {
//   name: string;
//   links: string[];
// }
// Здесь мы определяем тип Course, который содержит массив lessons. Каждый элемент этого массива — это объект типа Lesson, который содержит массив links. Каждый элемент этого массива — это строка. Такая структура данных может быть полезна, например, для хранения информации о курсах на сайте.

// Задание
// Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов. Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.

// const field1 = getField(1);
// console.log(field1);
// // [[null]]

// const field2 = getField(2);
// console.log(field2);
// // [[null, null], [null, null]

const getField = (count: number): null[][] => {
    const newArr = Array<null>(count).fill(null)
    const totalArr = newArr.map(() => Array<null>(count).fill(null))

    return totalArr
}

const two = getField(2)
console.log(two)