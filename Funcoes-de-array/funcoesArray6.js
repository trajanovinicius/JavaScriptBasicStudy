/* 
Agora vamos utilizar o every() para verificar se todos são maiores de idade
*/

const tchurma = [
  { id: 12, name: "Frederico", age: 18 },
  { id: 20, name: "Marcos", age: 17 },
  { id: 15, name: "Bruno", age: 13 },
  { id: 13, name: "Jobert", age: 19 },
  { id: 11, name: "Fred", age: 15 },
];

console.log( tchurma.every( p => p.age >= 18) );
