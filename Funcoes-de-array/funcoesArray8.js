/**
 * Vamos ver agora o método find(), vamos usar find
 * quando for preciso procurar ou verificar por um valor dentro de um
 * array ou objeto, sendo que o retorno é o primeiro elemento que satisfizer o teste
 * */

const pizzas = ["mussarela", "calabresa", "marguerita", "portuguesa"];

const foundPizza = pizzas.find((p) => p.startsWith("m"));
console.log(foundPizza);
