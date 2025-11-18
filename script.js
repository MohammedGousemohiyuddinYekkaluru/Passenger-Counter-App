const countElement = document.querySelector('#count-el');
const incrementBtn = document.querySelector('#increment-btn');
const saveBtn = document.querySelector('#save-btn');
const resetBtn = document.getElementById('reset-btn');
const decrementBtn = document.getElementById('decrement-btn');
const prevEntries = document.querySelector('.prev-entries');
const resetEntryBtn = document.getElementById('reset-entries');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count ++;
    countElement.textContent = count;
})

decrementBtn.addEventListener('click', () => {
    count --;
    countElement.textContent = count;
})

resetBtn.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
})

saveBtn.addEventListener('click', () => {
    prevEntries.textContent += ` ${count} - `;
    count = 0
    countElement.textContent = count;
})

resetEntryBtn.addEventListener('click', () => {
    prevEntries.textContent = ""
})