let firstCard = 5
let secondCard = 11

let cards = [firstCard, secondCard] // array - ordered list of items

let sum = firstCard + secondCard
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let message = ""

function startGame() {
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1]
  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?"
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    messageEl.textContent = "You're out of the game!"
    isAlive = false
  }
}

function newCard() {
  messageEl.textContent = "Drawing a new card from the deck"
  let card = 4
  sum += card
  renderGame()
}
