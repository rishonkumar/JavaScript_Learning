const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
  //   console.log("You clicked me");
  //   ul.innerHTML += "<li>Something new </li>";
  const li = document.createElement("li");
  li.textContent = "Something new to do";
  ul.append(li);
  //   ul.prepend(li);
});

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("Even in the LI");

    // console.log("item clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(item);

    e.stopPropagation();

    //to delete the item using style
    e.target.style.textDecoration = "line-through";
    //to delete the item using DOM
    e.target.remove();
  });
});

ul.addEventListener("click", (e) => {
  console.log("Even in the UL");
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
