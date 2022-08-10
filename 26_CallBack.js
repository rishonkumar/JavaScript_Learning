// asynchronous code
// callback - function inside another function  code / function which will later depending on condition

setTimeout(() => {
    console.log("Inside")
}, 1000)

console.log("Outside")