const btn = document.querySelector("[data-btn]")
const input = document.querySelector('[dataa-input-text]')
function printClick() {
    console.log('clicked')
}

// btn.addEventListener('click', printClick)

// btn.removeEventListener('click', printClick)

// event object (e)
btn.addEventListener("click", e => {
    console.log(e)
})

input.addEventListener('input', e => {
    console.log(e.target.value)
})




