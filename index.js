// Initiate cards
let cards = [] // array - ordered list of items
let sum = 0
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let message = ""

function getRandomCard() {
  let card = Math.floor( Math.random() * 13 ) + 1
  if (card > 10) {
    return 10
  } else if (card === 1) {
    return 11
  } else {
    return card
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
