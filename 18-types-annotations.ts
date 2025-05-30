// Typescript: Аннотации типов
// В этом уроке мы научимся использовать аннотации типов.

// Использование аннотации типов
// В простых случаях тип массива определяется как название типа и квадратные скобки после него, например: string[], number[]. Эта схема работает и с псевдонимами типов:

// type User = {
//   name: string
// };

// // При определении констант и переменных
// const users: User[] = [];

// // В определении функций
// function foo(users: User[]) {
//   // ...
// }
// Здесь мы определяем массив, элементами которого являются объекты типа User. В таком массиве можно хранить только объекты, которые соответствуют типу User.

// В случае составных типов, например, если мы хотим использовать объединение или описание объекта, добавляются круглые скобки — (Type)[]:

// const users: ({ name: string })[] = [];
// const users: (string | null)[] = [];
// const users: (User | null | { name: string })[] = [];
// Внутри круглых скобок стоит описание типа, а затем уже идет квадратные скобки.

// Также TypeScript дает еще один синтаксис, который описывается так: Array<Type>. Он универсальный — с его помощью можно описать любой массив. Описывается тип в такой записи между знаками меньше и больше:

// const users: Array<User> = [];
// const users: Array<number> = [];
// const users: Array<User> = [];

// const users: Array<{ name: string }> = [];
// const users: Array<string | null> = [];
// Но обычно так не делают. Там, где можно использовать более короткий вариант, используют его. Форма Array нужна в первую очередь для дженериков, которые рассмотрим позже.

// Определение пустого массива
// Если определить пустой массив и не указать тип, то его типом автоматически станет any[]. В такой массив можно добавить любые данные, включая вложенные массивы:

// const items = [];
// items.push(1);
// items.push('wow');
// items.push(['code-basics', 'hexlet']);
// Код с any будет работать всегда, но он выключает проверку типов. Чтобы этого не происходило, нужно всегда явно типизировать пустой массив:

// const items: Array<number> = [];
// Задание
// Реализуйте функцию unique(), которая убирает дубликаты из массива. 
// Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента.
//  Порядок значений результата определяется порядком их появления в массиве.



const unique1 = (coll: (string | number)[]): (string | number)[] => {

    const init:(string | number)[] = []
    for (let char of coll) {
        if(!init.includes(char)) {
            init.push(char)
        }
    }
    return init
}

function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    init,
  );
}
