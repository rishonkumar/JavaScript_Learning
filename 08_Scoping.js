// Everytime you are under one sqaure bracket it means you are under one Scope
// Every function has its own scope
// Inner scope can not be accessed outside 
// Global scope variable can be accessed anywhere
function sayHi(name) {
    let res = "Hi " + name;
    console.log(res);
}

let res = "Rishon"

sayHi(res)

{
    let a = 1;
    console.log(a)
}

{
    let a = 2;
    console.log(a)
}


let a = 3;
console.log(a)