const modal = document.querySelector('#modal')
const openModalButton = document.querySelector('#open-modal-btn')
const closeModalButton = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')


// create a click event listenier for the open modal btn 
// that adds the class "open" to the modal

openModalButton.addEventListener('click', () => {
    modal.classList.add('open')
})

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('open')
})