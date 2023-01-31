//arrays destructuring
const fruits = ["Apple", "Banana"];
let [a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring
let user = { username: "Enzo", age: 23};
let { username, age} = user;
console.log(username, user.age);

//spread operator
let person = { name:"Enzo", age:23};
let country = "Arg";

let data = {...person, country};
console.log(data);

//Rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3);