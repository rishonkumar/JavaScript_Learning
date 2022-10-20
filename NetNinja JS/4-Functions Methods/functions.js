// Hoisting work with normal function
//meaning we can call function before declaring

//function declaration

function greet() {
  console.log("Hello");
}

//store function in variable
//function expression
const speak = function () {
  console.log("Hello!!");
};

// calling
greet();

speak();

const s = function (name) {
  console.log(`good day ${name}`);
};

s("rishon");

// Return a value
const calArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

console.log(calArea(5));
