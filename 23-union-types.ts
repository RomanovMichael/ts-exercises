// Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.

// const str = 'test';
// lastIndex(str, 't'); // 3
// lastIndex(str, 'p'); // null

type unionType = number | null

const lastIndex = (str: string, char: string): unionType => {
  const ndx =  str.lastIndexOf(char)

  return ndx === -1 ? null : ndx
}

console.log(lastIndex('test', 't'))