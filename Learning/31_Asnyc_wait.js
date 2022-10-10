
function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, reject)
    })
}

// setTimeoutPromise(250).then(() => {
//     console.log('1')
//     return setTimeoutPromise(250)
// }).then(() => {
//     console.log("2")
// })

// Async is better way to write above function
async function doSTuff() {
    try {
        await setTimeoutPromise(250)
        console.log('1')
        await setTimeoutPromise(250)
        console.log('2')
    }
    catch (error) {
        console.error(error)
    }
}

doSTuff()