class Person {
  constructor(name) {
    this._name = name;
  }

  walk() {
    return `${this._name} está andando`;
  }
}

let person = new Person("Vinicius");

console.log(person.walk());
