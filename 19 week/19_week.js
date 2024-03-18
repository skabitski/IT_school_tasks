// function bike() {
//   console.log(this.name);
// }

// let name = "ninja";
// let obj1 = { name: "pomidor", bike: bike };
// let obj2 = { name: "site", bike: bike };

// bike();
// obj1.bike();
// obj2.bike();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("JON");
// console.log(typeof member);

// const person = {
//   name: "valera",
//   age: 23,
// };
// let city = person.city;
// city = "amstrdm";
// console.log(person)


/// TASK #1

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
