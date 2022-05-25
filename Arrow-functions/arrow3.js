let nomes = ["Gabriel", "Rafael", "Felipe"];

//Quando a única sentença em um arrow function é return podemos
//remover o return e remover as chaves envolvendo a sentença:
nomes.map((nome) => {
  console.log(nome.length);
});
//Por padrão meu vscodo faz correção para mim
//mas se eu removo não estoura nenhuma mensagem de erro{
