for (let i = 0; i < 5; i++) {
  console.log("In loops " + i);
}

console.log("Loops finished");

const names = ["rishon", "pasa", "carrol"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
