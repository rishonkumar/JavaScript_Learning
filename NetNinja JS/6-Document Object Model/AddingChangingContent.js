const para = document.querySelector("p");

//to get inner text
console.log(para.innerText);

//to update the text
para.innerText = "HEY Rishon!!!";

// to appended
para.innerText += "How are you";

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  console.log(p.innerText);
  p.innerText += " new text is added";
});

//to change html inside it

const content = document.querySelector(".content");

console.log(content.innerHTML);

content.innerHTML = "<h2>This is new h2</h2>";

const people = ["zyx", "abc"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
