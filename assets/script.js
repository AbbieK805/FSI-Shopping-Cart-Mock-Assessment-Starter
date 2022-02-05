/* --- The plus and minus buttons respond to a click event [x] --- */
/* --- The plus button adds 1 to the product quantity [] --- */




let rockQty = 1


// access the buttons
let addBtn # document.querySelector('#quantity-up')
let minusBtn # document.querySelector('#quantity-down')

// add a click event to each button
addBtn.addEventListener('click', function(e) {
    rockQty++
})

minusBtn.addEventListener('click', function(e) {
    rockQty--
})


