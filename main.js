
let player = {
    name: "Miri ",
    chips: 200
}
let bet = 10, botNumber
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false, gameStarted = false;
bot()
let cards = []
let dealerEl = document.getElementById("dealer-el")
let betEl = document.getElementById("bet-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "$" + player.chips 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1 
    if ( randomNumber > 10 )
        return 10
    else if (randomNumber === 1 )
        return 11
    else return randomNumber
}
function startGame(){
//Start Game

    if(gameStarted===false)
    {
        gameStarted=true
        let firstCard = getRandomCard() ,
        secondCard = getRandomCard()
        isAlive = true
        sum = firstCard + secondCard
        cards [0] = firstCard
        cards [1] = secondCard
        document.getElementById("start-el").textContent ="NEW GAME"
        betEl.textContent += " $" + bet
        renderGame()
}
//New Game
    else{
        if(sum < 22){
            if (sum < botNumber){
                if( botNumber < 22)
                    player.chips-=bet
                else player.chips+=bet
            }
            else if (sum > botNumber) player.chips += bet
        }
        else player.chips -= bet
        let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "$" + player.chips 
        cards = []
        sum = 0
        firstCard = getRandomCard() 
        secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards [0] = firstCard
        cards [1] = secondCard
        isAlive = true
        dealerEl.textContent = botNumber
        bot()
        renderGame()

    }
}
function renderGame(){
    hasBlackJack = false
if (sum <= 20){
    message = "Do you want to deaw a new card?"
}
else if(sum === 21){
    message = "Wohoo! You've got blackjack";
    hasBlackJack=true;
}
else{
    message = "You're out";
    isAlive=false;
}
messageEl.textContent = message;
cardsEl.textContent = "Cards: "
for ( let i = 0 ; i < cards.length ; i++){
    cardsEl.textContent+= cards[i] + ' '
}
sumEl.textContent = "Sum: " + sum;
}

function newCard(){
    if( isAlive && hasBlackJack===false)
    {
        let thirdCard = getRandomCard()
        sum+= thirdCard
        cards.push(thirdCard)
        renderGame()
}
} 
function plus(){
    if (isAlive)
    {
        bet+=10
        betEl.textContent = "Bet: $" + bet 
    }
}
function minus(){
    if (isAlive){
        bet-=10
        betEl.textContent = "Bet: $" + bet 
    }
}

function bot(){
    botNumber = Math.floor(Math.random() * 8 +17)
}
