import {yellowPlayerPath, greenPlayerPath, bluePlayerPath, redPlayerPath,
    bluePlayerStartAreaRings, yellowPlayerStartAreaRings, redPlayerStartAreaRings, greenPlayerStartAreaRings} from './board.js'
import {diceGeneratedNumber} from './dice.js'

function createPlayer(color) {
    const playerElement = document.createElement('div')
    playerElement.classList.add(`${color}-player`)

    return playerElement
}

function instantiatePlayers(playerStartAreaRings, playerColor) {
    
    playerStartAreaRings.forEach(startAreaRing => {

        const { playerRing, x, y } = startAreaRing
        const player = createPlayer(playerColor)

        player.style.top = y + 'px',
        player.style.left = x + 'px'
        playerRing.append(player)
    })
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
    if (diceNumber) {
        console.log(diceNumber)
        const { boardSquare, x, y } = playerPath[diceNumber]
    
        player.style.top = y + 'px'
        player.style.left = x + 'px'
        boardSquare.append(player)
    } 
    else return

}
    
movePlayer(createPlayer('blue'), bluePlayerPath)

