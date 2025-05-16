let CountEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count += 1
    CountEl.textContent = count
}

function save(){
    let str = count + " - "
    SaveEl.textContent += str
    CountEl.textContent = 0
    count = 0
}

function reset(){
    CountEl.textContent = 0
    SaveEl.textContent = "Previous Entries: "
}