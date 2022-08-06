// IN JS it moves all the function at first even though it is declared after it is called
// doesn't matter its up or downward declared only works for normal function

// It doesn't work with arrow functions - Its called hoisting

console.log(sum(1, 2))


function sum(a, b) {
    return a + b;
}