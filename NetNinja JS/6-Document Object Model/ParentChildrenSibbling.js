const article = document.querySelector("article");
console.log(article.children);

//to convert HTML collection to Array so that we can use forEach
//it return new value doesn't alter orginal value
console.log(Array.from(article.children));

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

const title = document.querySelector("h2");

console.log(title.parentElement); //article
console.log(title.parentElement.parentElement); //body
console.log(title.nextElementSibling); // p tag
console.log(title.previousElementSibling); // null

//chaining
console.log(title.nextElementSibling.parentElement.children);


