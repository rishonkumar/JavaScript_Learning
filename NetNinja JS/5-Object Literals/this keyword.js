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
  // if you want ot access blogs properties inside
  // this logBlogs
  //use NORMAL FUNCTION
  //   Arrow function will take window object
  logBlogs: function () {
    // console.log(blogs); error
    console.log(this.blogs); // this is user context
    console.log("this user has writted the following blog");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
  //ARROW WILL TAKE WINDOW OBJECT
  log: () => {
    console.log(this);
  },
};

// this is a context object and it represent the context
// in which the current code is executed

user.logBlogs();
user.log();

console.log(this); // this is global context (window)
