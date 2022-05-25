//mais um exemplo do método find():

const fruits = [
  { name: "jaca", quantity: 4 },
  { name: "banana", quantity: 5 },
  { name: "cereja", quantity: 10 },
  { name: "melão", quantity: 10 },
];

const foundFruit = fruits.find((fruit) => fruit.name === "melão");

console.log(foundFruit);
