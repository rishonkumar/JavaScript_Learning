const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.map((user) => user.name));
    // console.log(data)
  });

// ABOVE CODE USING ASYNC

async function doStuff() {
  const response = await fetch(URL);
  const users = await response.data;
  console.log(users);
}

doStuff();
