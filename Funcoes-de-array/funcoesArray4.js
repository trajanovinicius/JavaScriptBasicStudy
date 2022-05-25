/*
 vamos agora trabalhar com reduce().
 Você vai utilizar o método reduce, quando é preciso encontrar um valor 
 cumulativo ou contatenado com base em elementos de todo o array.
*/

//vamos fazer com um array de objetos, nosso objetivo é descobrir o total de
//lançamento de todos os países.

const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

/* reduce utiliza dois parâmetros, o primeiro é o valor anterior 
e o segundo é o valor atual*/

const totalLaunches = rockets.reduce(
  (prevVal, elem) => prevVal + elem.launches,
  0
); // é possível definir um valor inicial

console.log(`${totalLaunches} lançamentos feitos por todos os países`);
