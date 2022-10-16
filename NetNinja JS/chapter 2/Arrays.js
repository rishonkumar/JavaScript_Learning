// Collections of number or  strings

let ninjas = ["shaun", "ryu", "rishon"];

console.log(ninjas);

console.log(ninjas[1]);

ninjas[1] = "10";

let ages = [20, 23, 25];

console.log(ages[2]);

let random = ["rishon", 22];
console.log(random);

console.log(random.length);

// Array methods
let res = random.join("-");

res = random.indexOf("22");

res = random.concat(["Kumar", "Rahi"]);

res = random.push("Hey");
res = random.pop();
