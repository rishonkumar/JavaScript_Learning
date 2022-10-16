let score = "100";

console.log(score + 1); // 1001
console.log(typeof score);

score = Number(score);
console.log(score + 1); // 1002

console.log(typeof score);

//  string to number not possible => NaN
let r = Number("Hello");
console.log(r); // NAN

let b = String(50);
console.log(b, typeof b);
