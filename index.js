let firstCard =randomNumber()
let secondCard = randomNumber()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true;
let message = ""
let sumeEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function randomNumber(){   
    let ranNum = Math.floor(Math.random()* 13) + 1
    if (ranNum > 10){
        return 10
    } else if (ranNum === 1){
        return 11
    }else{
        return ranNum
    }
}

function startGame(){
    renderGame()
}

function renderGame(){
    sumeEl.innerText = "Sum: " + sum
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 28){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You have got BlackJack!"
        hasBlackJack = true;
    }else{
        message = "You are out of the game!"
        isAlive = false;
    }
    document.getElementById("message-el").textContent = "Want to play: " + message
}

function newGame(){
    let card = randomNumber()
    card += sum
    cards.push(card)
    renderGame()
    document.getElementById("sum-el").textContent = "Sum: " + card;
}