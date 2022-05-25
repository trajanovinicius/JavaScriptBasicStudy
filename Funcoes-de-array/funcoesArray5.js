// Vamos ver o every(), verificando se todos os elementos de um array
// são maiores que 10

const anotherArray = [12, 11, 23, 45, 12];

const allAbove10 = anotherArray.every((elem) => elem > 10);

console.log(allAbove10);
/* 
Vamos utilizar every quando for preciso testar se todos os elementos de 
um array passa por um teste específico, every vai me dar um resultado boolean(true, false).
*/
