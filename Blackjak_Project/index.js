let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player_detalis = {
  name:"Per",
  chips:200
}

let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById('player')

playerEl.textContent = player_detalis.name + " : $" + player_detalis.chips
function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1

  if(num > 10){
    return 10
  }
  else if (num ===1){
    return 11
  }
  else{
    return num
  }

  // and This is a if short Sentence
  // return num > 10 ? 10 : num === 1 ? 11 : num
}

function startGame() {
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = ""
  for(let i=0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " - " 
  }

  // and the following code instead of the for loop
  // cardsEl.textContent = cards.join(" - ")

  sumEl.textContent = sum

  if (sum <= 20) {
    message = "Do you need a New Card?"
  } else if (sum === 21) {
    message = "BlackJak! You Win"
    hasBlackJack = true
  } else {
    message = "Game Over💥"
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}
