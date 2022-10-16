console.log("Hello World");

let email = "rishonkumarrahi@gmail.com";
console.log(email);

// Concatenation

let fName = "Rishon";
let lName = "kumar";

let name = fName + " " + lName;

console.log(name);

// get characters
console.log(name[0]);

// string length
console.log(name.length);

// String methods

console.log(name.toUpperCase());

let result = name.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

// Common string methods

let email1 = "rishonkumarrahi@gmail.com";

let r = email1.lastIndexOf("r");
console.log(r);

// Slice

let res = email1.slice(2, 5); //sho
console.log(res); // print characters from 2 to 5

//substring
res = email1.substr(2, 5); //shonk
console.log(res); // print starting from idx 2 till count is 5

res = email1.replace("r", "w"); // replace first character r with w

res = email1.replace();
