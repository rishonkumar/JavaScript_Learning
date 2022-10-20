// Objects have properties and things they can do(methods)

// Object literals
// key value pair

let user = {
  name: "Rishon",
  age: 22,
  email: "rishonkumarrahi@gmail.com",
  location: "India",
  blogs: ["why mac and cheese", "10 things to do "],
};

console.log(user);
console.log(user.location);
console.log(user.blogs[1]);

user.age = 23;
console.log(user.age);

//another way
console.log(user["name"]);
console.log(user["email"]);

// when to use this
const key = "location";
console.log(user[key]); // user['location]

