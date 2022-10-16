let age = 20;

// let age = 30 error redefine

if (true) {
  let age = 40; // allowed inside one block
  let name = "Rishon";
  console.log("Inside block ", age, name);
}

console.log("Outside block", age);
// console.log(name) error


