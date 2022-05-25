//Função normal:
let nomes = ["Vinicius", "Bernardo", "Rodolfo", "Israel", "Romulo"];
nomes.map(function (nome) {
  console.log(nome.length);
});

//Arrow function:
nomes.map((nome) => {
  console.log(nome.length);
});
