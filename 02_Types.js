// Number
let a = 10 // number type

let b = 2.4 // number

console.log(typeof (a))
console.log(typeof (b))

console.log(1 + 2 * 3)
console.log((1 + 2) * 3)

// String

let s = "abcd"
console.log(s)

let ab = "Hello"
let bc = "World"

console.log(ab + " " + bc)

// Boolean

let aa = true
let bb = false;

console.log(aa)
console.log(bb)

console.log(aa && bb); // AND operator
console.log(true && true)
console.log(true || true)
console.log(true || false) // OR operator

let happy = true;
console.log(!happy) // false
console.log(!!happy) // true

// NULL and UNDEFINED

let aaa = undefined // means we dont have any value defined for that variable
console.log(aaa);
console.log(typeof aaa); //undefined

let bbb = null // we have given a value but this value is nothing
console.log(bbb);
console.log(typeof bbb); //Object - bug thats how js is defined

