const title = document.querySelector("h1");

//this overwrite all the style present before in html
// title.setAttribute("style", "margin : 50px");

//we can above prob

console.log(title.style);

console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "purple";

title.style.fontSize = "50px";
