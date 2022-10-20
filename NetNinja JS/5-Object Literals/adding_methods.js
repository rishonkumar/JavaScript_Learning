let user = {
  name: "Rishon",
  age: 22,
  email: "rishonkumarrahi@gmail.com",
  location: "India",
  blogs: ["why mac and cheese", "10 things to do "],
  login: function () {
    console.log("User logged in");
  },
  logout: function () {
    console.log("User logged out");
  },
};

user.login();
