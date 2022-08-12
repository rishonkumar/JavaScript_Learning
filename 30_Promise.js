const p = Promise.resolve("here")

p.then(message => {
    console.log(message)
})
    .catch(error => {
        console.error(error)
    })
    .finally(() => {
        console.log("finally")
    })

    // finally will run whatever the condition is