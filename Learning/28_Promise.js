// setTimeout(() => {
//     console.log("here")
// }, 250)

setTimeoutPromise(250).then(() => {
    console.log("here")
})

function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}


const button = document.querySelector("button")

function addEventListenerPromise(element, reslove) {
    return new Promise((resolve, reject) => {
        element.addEventListener(method, resolve)
    })
}

addEventListenerPromise(button, 'click').then(e => {
    console.log('clicked')
    console.log(e)
})