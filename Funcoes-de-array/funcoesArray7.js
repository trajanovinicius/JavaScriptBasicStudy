/*
Agora vamos ver o some().
usa-se o some quando é preciso testar se pelo menos um elemento 
de um array passa por um teste específico, se for verdade retorna true, caso não seja 
retorna false
*/

//Exemplo: vamos verificar se tem algum número primo:

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

const ondeMoreArray = [6, 8, 11, 14, 48];

console.log(ondeMoreArray.some(isPrime));
