import {yellowPlayerPath, greenPlayerPath, bluePlayerPath, redPlayerPath,
    bluePlayerStartAreaRings, yellowPlayerStartAreaRings, redPlayerStartAreaRings, greenPlayerStartAreaRings} from './board.js'
import {diceGeneratedNumber} from './dice.js'

const diceRollButton = document.querySelector('.dice-number-button')

function createPlayerElement(color) {
    const playerElement = document.createElement('div')
    playerElement.classList.add(`${color}-player`)

    return playerElement
}

let player = createPlayerElement('blue')

setInterval(() => {
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

//////////////////////////////////////////////////////////
const createPlayer = (color, path) => {
    const { boardSquare, x, y } = path
    const element = document.createElement('div')
    element.classList.add(`${color}-player`)

    return {
        playerElement: element,
        classList: `${color}-player`,
        path: path,
        currentBoardSquare: boardSquare,
        xPos: element.style.left = x + 'px',
        yPos: element.style.top = y + 'px',
        parent: element.parentElement
    }
}
console.log(createPlayer('red', redPlayerPath))
