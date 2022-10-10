console.log(window.document)
console.log(document) // html page
console.log(document.body)


const element = document.createElement("span")
element.innerText = "Hello World"
document.body.appendChild(element)