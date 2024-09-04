// console.log(7)

let count = 0
let countEl = document.getElementById('count-el')

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decrement(){
    count = count - 1
    countEl.innerText = count
}

function zero(){
    count = 0
    countEl.innerHTML = count
}