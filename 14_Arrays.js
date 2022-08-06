const a = [1, 2, 3, 4, 5]

console.log(a)
console.log(a[2])

a.push(11)
a.push("Hello")

// Array inside an array
a.push(["hi", "bye"])
console.log(a)// [1, 2, 3, 4, 5, 11, 'Hello', ['hi', 'bye']]



const b = [["hi", "bye"], [1, 2]]
console.log(b) // [ [ 'hi', 'bye' ], [ 1, 2 ] ]

