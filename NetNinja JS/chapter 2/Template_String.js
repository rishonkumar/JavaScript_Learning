const title = "Best read of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
let r = "The blog called " + title + " by " + author + "has" + likes + "likes";
console.log(r);

// Template string way

r = `The blog  called ${title} by ${author} has ${likes} likes`;

console.log(r);

// creating html templates

let html = `
     <h2>${title}</h2>
    <span>The blog has ${likes} likes </span>
`;
console.log(html);
