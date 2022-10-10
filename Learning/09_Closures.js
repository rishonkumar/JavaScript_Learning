// This is closure
// inner function is accessing variable outside its function 
let a = 1

function print(variable) {
    let c = 3
    return function func(variable2) {
        console.log(variable) // 1
        console.log(variable2) // 2
        console.log(c) // 3
    }
    console.log(a) // it will take most recent value of a "2"
}

a = 2

print()

let b = print(1)
b(2)