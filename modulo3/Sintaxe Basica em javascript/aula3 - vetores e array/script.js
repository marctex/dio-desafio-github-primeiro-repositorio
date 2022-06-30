//declaração de um array

/* let array = ['string', 6, true];
console.log(array); */

//pode guardar vários tipos de dados e outros arrays

let array = ['string',10, true,['array1'],['array2']];
/*
Métodos do array
- forEach()   - intera um array
- push()      - adiciona item  no final do array
- pop()       - remove item no final do array
- shift()     - remove item no inicio do array
- unshift()   - adiciona item no inicio do array
- indexOf()   - retorna o indice de um valor
- splice()    - remove ou substitui um item pelo indice
- slice()     - retorna uma parte de um array existente

array.forEach(function(item, index){console.log(item, index)});
*/
array.push(25, 'Marcelo');
console.log(array); 
array.pop();
console.log(array); 
array.shift();
console.log(array);
array.unshift('Juca')
console.log(array);
console.log(array.indexOf(10));
let newArray = array.slice(1,4);
console.log(newArray);
array.splice(0,3);
console.log(array);

let object = { string: 'string', number: 100, boolean: true, array:["array"],objectInterno: {objectInterno: 'objeto interno'}};
console.log(object);

var numero = object.number;
console.log(numero);

var{string, boolean,objectInterno} = object;
console.log(string,boolean, objectInterno); 