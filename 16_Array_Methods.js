const a = [1, 2, 3, 4, 5]

a.forEach(number => {
    console.log(number)
})

a.forEach((number, index) => {
    console.log(number + " " + index)
})

const b = [2, 5, 6, 8, 10]

// map -> return a new array
const newA = a.map(number => {
    return number * 2
})

console.log(newA) 