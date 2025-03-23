// Реализуйте функцию getParams(),
// которая принимает на вход строку запроса (query string)
//  и возвращает параметры в виде объекта:
// getParams('per=10&page=5');
// { per: '10', page: '5' }
// getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }
var getParams = function (query) {
    var params = {};
    var pairs = query.split('&');
    for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
        var pair = pairs_1[_i];
        var _a = pair.split('='), key = _a[0], value = _a[1];
        params[key] = value;
    }
    return params;
};
