
// Сужение типов — большая тема со множеством нюансов. Он часто встречается в TypeScript, поэтому с ним можно будет разобраться на постоянной практике. Подробнее с особенностями работы этого механизма можно ознакомиться в документации — ссылка в конце урока.

// Задание
// Реализуйте функцию last(), которая извлекает последний элемент из переданного значения. Значением может быть строка или число. Функция возвращает значение того же типа, которое было передано в качестве параметра:

// Передаем в качестве параметра строку
// Функция возвращает строку
// last('hexlet'); // t


// Передаем в качестве параметра число
// Функция возвращает числ
// BEGIN (write your solution here)

function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }

  return value[value.length - 1] ?? '';
}

const last = (value: string | number) => {

  if(typeof value === 'string') {

    if(value === '') {
      return ''
    } else {

    const work_val = value.split('');

    return work_val[work_val.length - 1].toString()
    }
  }

  if (typeof value === 'number') {

    const work_val = value.toString().split('')

    return Number(work_val[work_val.length - 1])

  }

}

// const u = last('123')
// console.log(u)
