// Grab element from grab
const para = document.querySelector("p"); // get the 1st p tag
console.log(para);

//class selector
const paraC = document.querySelector(".error");
console.log(paraC);

const paraD = document.querySelector("div.error");
console.log(paraD);

// Multiple Elements
const p = document.querySelectorAll("p"); // node list
console.log(p);
console.log(p[2]);

p.forEach((para) => {
  console.log(para);
});

const errors = document.querySelectorAll(".error");
console.log(errors);
