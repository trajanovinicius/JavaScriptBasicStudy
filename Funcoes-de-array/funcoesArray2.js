/*
Vamos converter fahrenheit para celsius utilizando map(),
também utilizando arrow functions
*/

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));

console.log(celsius);
