// passing function as argument callback function

const myFunc = (callbackFun) => {
  let v = 30;
  callbackFun(v);
};

//call back function defined
myFunc((value) => {
  console.log(value);
});

let people = ["rr", "ww", "ddw"];

people.forEach(function (person) {
  console.log(person);
});

people.forEach((person) => {
  console.log(person);
});

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

//callback
people.forEach(logPerson);

const ul = document.querySelector(".people");

const p = ["hi", "hello"];

let html = ``;

p.forEach(function (person) {
  // create a html template
  html += `<li> ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
