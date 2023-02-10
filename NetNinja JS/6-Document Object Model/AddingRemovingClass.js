const content = document.querySelector("p");

//give all the class list
console.log(content.classList);

//adding class
// content.classList.add("error");

//remove class
// content.classList.remove("error");

const paras = document.querySelectorAll("p");

/*
InnerText will not show if the content is hidden using style

whereas textContent will read all the content
*/

paras.forEach((p) => {
  //   console.log(p.textContent);

  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

//toggle
const title = document.querySelector(".title");

title.classList.toggle("test"); //add test class
title.classList.toggle("test"); //remove test class
