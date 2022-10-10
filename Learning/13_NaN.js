const a = "1"

console.log(typeof parseInt(a)) // number

const b = "asdf";
console.log(typeof parseInt(b)) // NaN 

// to check it is Nan
console.log(isNaN(b))