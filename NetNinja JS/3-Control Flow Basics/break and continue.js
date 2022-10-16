const s = [50, 60, 0, 100, 200, 10];

for (let i = 0; i < s.length; i++) {
  if (s[i] === 0) {
    continue; //ignore the rest of the code below and move to next iteration
  }

  console.log("You score " + s[i]);

  if (s[i] === 100) {
    console.log("Congrats, you got the top score");
    break; // loop will stop
  }
}
