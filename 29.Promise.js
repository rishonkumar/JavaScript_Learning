// if one of them fails it will show the error since it is Promise.all
// you can use Promise.any if any one is resolve 
// / Promise.race will print whatever at first 
// Promise.allSettled will run regardless of resolve and reject . and return 
// all the status for each indivudual 
Promise.all([
    Promise.resolve('1'),
    Promise.reject('2'),
    Promise.resolve('3')
])
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error)
    })

Promise.resolve('value').then(message => console.log(message))

Promise.reject('value').catch(message => console.error(message))