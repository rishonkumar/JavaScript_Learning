//here we do event to form not to submit event

const form = document.querySelector(".signup-form");
// const userName = document.querySelector("#username");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(userName.value);
  //other way of getting data from form using dot notation(getting from id or name)
  console.log(form.username.value);
});

const username = "rishon";
const pattern = /[a-z]{6}/;

let result = pattern.test(username);

console.log(result);
if (result) {
  console.log("Regex Test Passed");
} else {
  console.log("Regex Test Failed");
}

let r = username.search(pattern);
//return integer
console.log(r);
