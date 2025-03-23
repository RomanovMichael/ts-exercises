// Реализуйте функцию getParams(),
// которая принимает на вход строку запроса (query string)
//  и возвращает параметры в виде объекта:

// getParams('per=10&page=5');
// { per: '10', page: '5' }
// getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }

const getParams = (query: string): { [key: string]: string } => {
    const params: any = {};
    const pairs = query.split('&');
    for(let pair of pairs) {
        const [key, value] = pair.split('=');
        params[key] = value;
    }
    return params;
};


function getParams1(query: string): { [key: string]: string } {
  const parts = query.split('&');
  const init: { [key: string]: string } = {};
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, init);

  return result;
}