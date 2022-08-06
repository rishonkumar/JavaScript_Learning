let a = "1"



console.log(a)
console.log(typeof a)

// explicit conversion
console.log(typeof parseInt(a))

let b = 1.34

console.log(typeof b.toString())

// Inplicit conversion
let aa = 1;
let bb = "Hello"

console.log(bb + a) // Hello1
console.log(bb - a) // NaN

let ab = 1;
let ba = "1"

console.log(ab == ba) // converting into int  => true

