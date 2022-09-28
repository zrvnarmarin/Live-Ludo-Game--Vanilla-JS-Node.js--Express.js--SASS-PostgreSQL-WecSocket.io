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

        console.log(player.style.top, player.style.left)
    })

    console.log('Pozicije skupine igrača: ', playerStartAreaRings, playerColor)
}

instantiatePlayers(bluePlayerStartAreaRings, 'blue')
instantiatePlayers(redPlayerStartAreaRings, 'red')
instantiatePlayers(greenPlayerStartAreaRings, 'green')
instantiatePlayers(yellowPlayerStartAreaRings, 'yellow')


setInterval(() => {
    console.log(diceGeneratedNumber.innerText)
}, 2000)

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

console.log(returnPlayerObject('red'))