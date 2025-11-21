export let person = {
  name: "Ismael",
  age: 23,
  isActive: true,
  hobbies: ["baseball", "games"],
  toString() {
    // Los metodos son funciones que se encuentran dentro de un objeto. Tambien podemos mandar argumentos
    let objectString = this.name + " " + this.age + " " + this.hobbies;
    console.log(objectString);
  },
};
// console.log(person.name.toUpperCase());

// person.toString();

export let car = {
  wheels: 4,
  doors: 4,
  trunk: "grande",
  brand: "Fiat",
};
export let smartTv = {
  brand: "Panasonic",
  inches: 40,
  price: 230,
};

export let youtubeVideo = {
  name: "Karmalanhd",
  creator: "Vegeta777",
  date: "12/03/2015",
};

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
