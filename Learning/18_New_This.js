
function createUser(name, age) {
    return { name: name, age: age, human: true }
}

// Constructor
// function User(name, age) {

//     return { name: name, age: age, human: true }
// }
function User(name, age) {
    this.name = name
    this.age = age
    this.human = true
} // User { name: 'Rishon', age: 25, human: true }

const user = new User("Rishon", 25);
console.log(user)



// const user = createUser('Rishon', 22)

// console.log(user) // { name: 'Rishon', age: 22 }

// const date = new Date() // Date -> object
// console.log(date)
// console.log(date.getDay())



