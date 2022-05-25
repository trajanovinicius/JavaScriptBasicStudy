//Funções anônimas de callback
document.addEventListener("click", function () {
  console.log("Clicked");
});
//Funções anônimas de callback com arrow function
document.addEventListener("Clique", () => console.log("clicou"));

//Arrow function redefine como o this é tratado dentro de uma função, então altera completamente o seu uso
//Arrow functions, não tem seu próprio this.
