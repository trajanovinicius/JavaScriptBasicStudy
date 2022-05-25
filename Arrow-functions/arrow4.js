//Função normal:
function soma(a, b) {
  return a + b;
}
console.log(soma(10, 100));

//Arrow functions, são sempre funções anônimas. então quando tiver caso em que
//Não for anômimo, precisamos atribuir ela a uma variável.

//para caso de funções com 1 instrução a palavra return pode ser omitida
//e funcionará, implicitamente e também não é preciso utilizar chaves.
const sum = (a, b) => a + b;
