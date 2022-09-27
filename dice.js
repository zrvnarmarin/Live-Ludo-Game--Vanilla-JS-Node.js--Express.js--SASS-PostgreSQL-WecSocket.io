import {getRandomIntFromIntervals} from './utillityFunctions.js'

// DOM selectors
const dice = document.querySelector('.dice')
const diceRollButton = document.querySelector('.dice-number-button')

function rotateDiceSide(randomNumber) {
    if (randomNumber === '1') {
        dice.style.transform = 'rotateY(360deg)'
    } 
    else if (randomNumber === '2') {
        dice.style.transform = 'rotateX(180deg)'
    } 
    else if (randomNumber === '3') {
        dice.style.transform = 'rotateY(270deg)'
    } 
    else if (randomNumber === '4') {
        dice.style.transform = 'rotateY(90deg)'
    } 
    else if (randomNumber === '5') {
        dice.style.transform = 'rotateX(270deg)'
    } 
    else if (randomNumber === '6') {
        dice.style.transform = 'rotateX(90deg)'
    }
}

function triggerDiceAnimation() {
    // Trigger animation on button click
    dice.classList.add('rotate-dice')

    // Remove animation after 1 second
    setTimeout(() => {
        dice.classList.remove('rotate-dice')
    }, 1000)
}

function rotateDice() {
    const diceNumber = getRandomIntFromIntervals(1, 6).toString()
    console.log(diceNumber)

    triggerDiceAnimation()
    rotateDiceSide(diceNumber)

    return diceNumber
}

// Dice rotating on button click to show side that contains exact generated random number
diceRollButton.addEventListener('click', rotateDice)
