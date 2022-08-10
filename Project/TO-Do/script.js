// 1. Select all items
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. When i submit the form add a new element
form.addEventListener('submit', e => {
    e.preventDefault()

    // console.log(input.value)
    // 1> create new item
    const item = document.createElement('div')
    item.innerText = input.value;
    item.classList.add('list-item')

    // console.log(item)

    // 2 add that item to list
    list.appendChild(item)
    // 3 clear input
    input.value = ""

    // 4 set up event listen to delete item
    item.addEventListener('click', () => {
        list.remove()
    })
})