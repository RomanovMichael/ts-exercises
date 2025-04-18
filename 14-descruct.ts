// // Обычное определение
// const f = (user) => {
//   console.log(user.firstName, user.age);
// };

// // Деструктурированный объект
// const f = ({ firstName, age }) => {
//   console.log(firstName, age);
// };

// const user = { firstName: 'Smith', age: 30 };
// f(user); // => 'Smith', 30
// Деструктурированный объект визуально похож на параметры функции. При этом он все равно остается объектом, поэтому в TypeScript его тип описывается после закрывающей фигурной скобки:

// // Обычное определение
// function f(user: { firstName: string, age: number }) {
//   console.log(user.firstName, user.age);
// }

// // Деструктурированный объект
// function f({ firstName, age }: { firstName: string, age: number }) {
//   console.log(firstName, age);
// }
// Здесь мы описали тип объекта внутри параметра функции и сразу же деструктурировали его.

// Если вынести определение типа в псевдоним, то можно сделать код поменьше:

// type User = {
//   firstName: string;
//   age: number;
// }

// function foo({ firstName, age }: User) {
//   console.log(firstName, age);
// }

// Реализуйте функцию lessonsCount(), 
// которая принимает на вход курс и возвращает количество лекций внутри него:

// const course = { lessons: ['intro', 'lala'] };
// lessonsCount(course); // 2

const lessonsCount = ( {lessons}: { lessons: string[]}) =>  {
    return lessons.length
}