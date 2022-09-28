import {yellowPlayerPath, greenPlayerPath, bluePlayerPath, redPlayerPath,
    bluePlayerStartAreaRings, yellowPlayerStartAreaRings, redPlayerStartAreaRings, greenPlayerStartAreaRings} from './board.js'

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

    console.log(playerStartAreaRings, playerColor)
}

instantiatePlayers(bluePlayerStartAreaRings, 'blue')
instantiatePlayers(redPlayerStartAreaRings, 'red')
instantiatePlayers(greenPlayerStartAreaRings, 'green')
instantiatePlayers(yellowPlayerStartAreaRings, 'yellow')