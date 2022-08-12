function getValueDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

function getValueDelayWithError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Error")
        }, delay)
    })
}

// Async function
// call getvalyedelay twice and prinout the returned value
// then call ERROR and make sure that error is properly caught

async function doSTuff() {
    try {
        const v1 = await getValueDelay('Rishon', 250)
        console.log(v1)
        const v2 = await getValueDelay('Rishon Kumar', 250)
        console.log(v2)
        const v3 = await getValueDelayWithError('Rishon Kumar', 250)
        console.log(v3)
    }
    catch (e) {
        console.error(e)
    }
    finally {
        console.log("Finally")
    }
}

doSTuff()