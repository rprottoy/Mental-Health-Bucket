let collectEl = document.getElementById("collect-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function collect() {
    let countStr = count + " - "
    collectEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
