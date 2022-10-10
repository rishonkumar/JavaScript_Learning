// let name = "Rishon"
// const age = 25
// const favouriteNUmber = 3

// emptyy object
// let person = {}

let person = {
    name: "Rishon",
    age: 25,
    favouriteNumber: 3,
    sayHi: function () {
        console.log("Hi")
    },
    sayHi2() {
        console.log("Hi2")
    }
}

// console.log(person)
// console.log(person.age)

person.sayHi()
person.sayHi2()

// object inside objects

let person1 = {
    name: "R",
    address: {
        street: "45 xyz",
        city: "Cuttack"
    },
    phoneNo: 345677,
    hobbies: ["Weight ligitng", "Programming"]
}

console.log(person1.hobbies[1]);
console.log(person1.address.city)

