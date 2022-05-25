/* Vamos começar falando do Array prototype map()
você vai usar map quando for preciso, traduzir ou mapear todos os elementos 
de um array para outro conjunto de valores. */

//Exemplo vamos começar mapeando e dobrar os valores:

const numbers = [1, 4, 5, 6, 7, 8];

const doubledNumbers = numbers.map(function (elem) {
  return elem * 2;
});

console.log(doubledNumbers);

//Obs:
//A funçao map não altera o valor original, portanto o resultado
//deve ser atribuído para outra variável
