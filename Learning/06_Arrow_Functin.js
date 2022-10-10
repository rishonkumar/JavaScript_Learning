function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2))


let sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow)
console.log(sumArrow(1, 2))



let printNameArrow = name => {
    console.log(name);
}

printNameArrow("Rishon")

// WHY ARROW OVER NORMAL FUNCTION

function func(x, callBack) {
    callBack(x)
}
// normal
func(10, function (variable) {
    console.log(variable)
})

// using arrow
func(10, variable => {
    console.log(variable)
})