let user = {
  name: "Alice",
  married: false,
  age: 32,
};

console.log(user);
let userJson = JSON.stringify(user);
console.log(userJson);
user = JSON.parse(userJson)
console.log(user);



// let userJson = `{
//     name: 'Alice',
//     married: false,
//     age:32
// }`;
// console.log(userJson);
