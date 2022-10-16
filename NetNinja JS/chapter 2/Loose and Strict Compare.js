let age = 25;

// loose comparison (different type can still be equal)
// == loose
console.log(age == 25);
console.log(age == "25");
console.log(age != 25);
console.log(age != "25");

//strict comparison (different type cannot be equal)
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");

