import {yellowPlayerPath, greenPlayerPath, bluePlayerPath, redPlayerPath,
    bluePlayerStartAreaRings, yellowPlayerStartAreaRings, redPlayerStartAreaRings, greenPlayerStartAreaRings} from './board.js'
import {diceGeneratedNumber} from './dice.js'

const diceRollButton = document.querySelector('.dice-number-button')

function createPlayer(color) {
    const playerElement = document.createElement('div')
    playerElement.classList.add(`${color}-player`)

    return playerElement
}

function createPlayerElement() {
    const playerElement = document.createElement('div')

    return playerElement
}

function returnPlayerObject(color) {
    const playerElement = document.createElement('div')
    playerElement.classList.add(`${color}-player`)

    return {
        player: playerElement,
        classList: playerElement.className.split(' '),
        posY: playerElement.style.top,
        posX: playerElement.style.left
    }
}

function movePlayer(player, playerPath) {

    const diceNumber = parseInt(diceGeneratedNumber.innerText)

    if (diceNumber && !isNaN(diceNumber)) {

        const { boardSquare, x, y } = playerPath[diceNumber]
    
        player.style.top = y + 'px'
        player.style.left = x + 'px'
        boardSquare.append(player)
    } 
    else return
}

let player = createPlayer('blue')
console.log('player: ', player)

setInterval(() => {
    // movePlayer(player, bluePlayerPath)
    func()
}, 1000);


// Punjenje arraya i micanje igraća
let array = []
const func = async () => {

    const data = await new Promise(resolve => {
        const diceNumber = parseInt(diceGeneratedNumber.innerText)

        if (diceNumber && !isNaN(diceNumber)) array.push(diceNumber)

        resolve(array)
    })
    console.log(data, ' array sa brojevima')
    
    let sum = data.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    const { boardSquare, x, y } = bluePlayerPath[sum]

    player.style.top = y + 'px'
    player.style.left = x + 'px'
    boardSquare.append(player)
    console.log('Sum: ' + sum)
}

const move = (player, path, index) => {

    const { boardSquare, x, y } = path[index]

    player.style.top = y + 'px'
    player.style.left = x + 'px'
    boardSquare.append(player)
    console.log(boardSquare, x, y)
}

let playerTwo = createPlayer('green')
diceRollButton.addEventListener('click', async () => {
    const data = await new Promise(resolve => {
        const diceNumber = parseInt(diceGeneratedNumber.innerText)

        if (diceNumber && !isNaN(diceNumber)) array.push(diceNumber)

        resolve(array)
    })
    console.log(data, ' array sa brojevima')
    
    let sum = data.reduce((prev, curr) => {
        return prev + curr
    }, 0)
    move(playerTwo, greenPlayerPath, sum)
})