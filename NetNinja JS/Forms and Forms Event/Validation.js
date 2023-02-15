const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
//validation
const usernamePattern = /^[a-zA-z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "That username is Valid";
  } else {
    feedback.textContent = "That username is Not-Valid";
  }
});

//live feedback
form.username.addEventListener("keyup", (e) => {
  console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    console.log("Passed");
    form.username.setAttribute("class", "success");
  } else {
    console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
