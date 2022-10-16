// logical operators => OR || and AND &&
// Logical not NOT(!)

const pass = "pass@123443";

if (pass.length >= 12 && pass.includes("@")) {
  console.log("pass is very strong");
} else if (pass.length >= 10 || (pass.includes("@") && pass.length > 5)) {
  console.log("Password is strong enough");
} else {
  console.log("pass is not long");
}


