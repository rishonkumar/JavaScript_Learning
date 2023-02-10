const link = document.querySelector("a");

//to get
console.log(link.getAttribute("href"));

// to update
link.setAttribute("href", "https://www.youtube.com/watch?v=ZqFCn4Nia4o");

link.innerText = "THE MASHUP";

const mssg = document.querySelector("p");

// to get class attribute
console.log(mssg.getAttribute("class"));

// to update
mssg.setAttribute("class", "success");

mssg.setAttribute("style", "color : green");
