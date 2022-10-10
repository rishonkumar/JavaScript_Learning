// I am going ot excute some code if i am success in doing i will let you know
// give you result if unsucessfull i will let you know the error

// resolve - when you complete
// reject - when you fail
/// these are the functions
const promise = new Promise((resolve, reject) => {
    const sum = 1 + 1
    if (sum == 2) {
        resolve('Success')
    }
    else {
        reject('Error')
    }
})

// if it resolved then this is printed
// if promised then do it

// catch when it is rejected or any kind of error in the code
promise.then(message => {
    console.log(message)
})
    .catch(message => {
        console.error(message)
    })


