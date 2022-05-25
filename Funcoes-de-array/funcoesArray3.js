/* 
Vamos ver agora o método filter(), removendo números duplicados de um array
*/

const yetAnotherArray = [1, 2, 2, 3, 3, 4, 5, 5];

const uniqueArray = yetAnotherArray.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);
console.log(uniqueArray);
/*
Você vai utilizar filter quando for preciso eliminar elementos indesejados
com base em algumas condições, em outras palvras quando é preciso filtrar(filter).
*/
