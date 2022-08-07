const button = document.querySelector('button')

button.addEventListener('click', e => {
    console.log("Arrow function")
    console.log(this) // window 
})

button.addEventListener('click', function (e) {
    console.log("function")
    console.log(this) // Return the button , it returns where it is called here its called inside button 
})