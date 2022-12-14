import {getRandomIntFromIntervals} from './utillityFunctions.js'

// DOM selectors
const dice = document.querySelector('.dice')
const diceRollButton = document.querySelector('.dice-number-button')
export const diceGeneratedNumber = document.getElementById('dice-generated-number')

// Functions
function displayProperDiceSide(randomNumber) {
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

export function getRandomDiceNumberAndTriggerDiceRotation() {
    // Hide all before generated numbers, but leave place
    diceGeneratedNumber.style.visibility = 'hidden'
    
    // Generate random number
    const diceNumber = getRandomIntFromIntervals(1, 6).toString()

    // Engage dice rotation and display correct dice side
    triggerDiceAnimation()
    displayProperDiceSide(diceNumber)

    // Set dice generated number to generated value at the same time in which the dice stops rotating
    setTimeout(() => {
        diceGeneratedNumber.style.visibility = 'visible'
        diceGeneratedNumber.innerText = diceNumber
    }, 1000)

    return diceNumber
}

// Event Listeners
diceRollButton.addEventListener('click', getRandomDiceNumberAndTriggerDiceRotation)