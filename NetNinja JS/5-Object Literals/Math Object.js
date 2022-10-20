console.log(Math);

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); //depends on which near it will round
console.log(Math.floor(area)); // it will always front lower value
console.log(Math.ceil(area)); // it will always front higher value
console.log(Math.trunc(area)); // it will print integer

//random

const random = Math.random();

console.log(random); // (0-1) range

console.log(Math.round(random)); // only 0 or 1
console.log(Math.round(random * 100)); // 1 - 100
