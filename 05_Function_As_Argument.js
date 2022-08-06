function printVariable(variable) {
    console.log(variable)
}

function func(x) {
    console.log("before")
    x("Hello world")
    console.log("after")
}


// console.log(printVariable) // [Function: printVariable] it has definition of function

printVariable("hi")

func(printVariable) // hello world


function sumCallBack(a, b, callBack) {
    callBack(a + b)
}

function handleSum(sum) {
    console.log(sum);
}

sumCallBack(1, 2, handleSum)


function printName(name, callBack) {
    callBack("Hello " + name);
}


printName("Rishon", printVariable);
// other way of writing above code
printName("Rishon", function (variable) {
    console.log(variable)
});