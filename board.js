import {getElementOriginPoint, getElementPositionRelativeToTheViewport} from './utillityFunctions.js'
        
// Player paths selectors
const boardSquares = [...document.getElementsByClassName('board-square')]
const wayPoints = []
const wayPointIndexes = []

// Player start area rings selectors
const startAreaPlayerRings = [...document.getElementsByClassName('start-area-player-ring')]
const startAreaPlayerRingsCenters = []

// Creating path waypoints
boardSquares.forEach((boardSquare, index) => {

    wayPointIndexes.push(index)

    const waypoint = {
        boardSquare: boardSquare,
        wayPointIndex: wayPointIndexes[index],
        classList: boardSquare.className.split(' '),
        isHomeBoardSquare: boardSquare.className.includes('home-board-square'),
        isPlayerStartingPoint: boardSquare.className.includes('starting-board-square'),
        x: getElementPositionRelativeToTheViewport(boardSquares[index]).left + getElementOriginPoint(boardSquares[index]).x / 2,
        y: getElementPositionRelativeToTheViewport(boardSquares[index]).top + getElementOriginPoint(boardSquares[index]).y / 2,
    }
    
    wayPoints.push(waypoint)
})

// Creating starting areas for each group of players
startAreaPlayerRings.forEach((playerRing, index) => {

    const playerStartRing = {
        playerRing: playerRing,
        classList: playerRing.className.split(' '),
        color: getPlayerStartAreaRingColor(playerRing),
        x: getElementPositionRelativeToTheViewport(startAreaPlayerRings[index]).left + getElementOriginPoint(startAreaPlayerRings[index]).x / 1.9,
        y: getElementPositionRelativeToTheViewport(startAreaPlayerRings[index]).top + getElementOriginPoint(startAreaPlayerRings[index]).y / 1.9,
        isPlayerOnRing: playerRing.hasChildNodes(),
    }

    startAreaPlayerRingsCenters.push(playerStartRing)
})

// Determining all type of player`s path 
export const yellowPlayerPath = [
    wayPoints[5], wayPoints[8], wayPoints[11], wayPoints[14], wayPoints[17],
    wayPoints[36], wayPoints[37], wayPoints[38], wayPoints[39], wayPoints[40],
    wayPoints[41], wayPoints[47], wayPoints[53], wayPoints[51], wayPoints[50],
    wayPoints[49], wayPoints[48], wayPoints[56], wayPoints[59], wayPoints[62],
    wayPoints[65], wayPoints[68], wayPoints[71], wayPoints[70], wayPoints[69],
    wayPoints[63], wayPoints[60], wayPoints[57], wayPoints[54],
    wayPoints[35], wayPoints[34], wayPoints[33], wayPoints[32], wayPoints[31],
    wayPoints[30], wayPoints[24], wayPoints[18], wayPoints[20], wayPoints[21],
    wayPoints[22], wayPoints[23], wayPoints[15], wayPoints[12], wayPoints[9],
    wayPoints[6], wayPoints[3], wayPoints[0], wayPoints[1], wayPoints[4],
    wayPoints[7], wayPoints[10], wayPoints[13], wayPoints[16]
]

export const greenPlayerPath = [
    wayPoints[52], wayPoints[51], wayPoints[50], wayPoints[49], wayPoints[48],
    wayPoints[56], wayPoints[59], wayPoints[62], wayPoints[65], wayPoints[68],
    wayPoints[71], wayPoints[70], wayPoints[69], wayPoints[63], wayPoints[60],
    wayPoints[57], wayPoints[54], wayPoints[35], wayPoints[34], wayPoints[33],
    wayPoints[32], wayPoints[31], wayPoints[30], wayPoints[24], wayPoints[18],
    wayPoints[20], wayPoints[21], wayPoints[22], wayPoints[23],
    wayPoints[15], wayPoints[12], wayPoints[9], wayPoints[6], wayPoints[3],
    wayPoints[0], wayPoints[1], wayPoints[2], wayPoints[8], wayPoints[11],
    wayPoints[14], wayPoints[17], wayPoints[36], wayPoints[37], wayPoints[38],
    wayPoints[39], wayPoints[40], wayPoints[41], wayPoints[47], wayPoints[46],
    wayPoints[45], wayPoints[44], wayPoints[43], wayPoints[42]
]

export const redPlayerPath = [
    wayPoints[66], wayPoints[63], wayPoints[60], wayPoints[57], wayPoints[54],
    wayPoints[35], wayPoints[34], wayPoints[33], wayPoints[32], wayPoints[31],
    wayPoints[30], wayPoints[24], wayPoints[18], wayPoints[20], wayPoints[21],
    wayPoints[22], wayPoints[23], wayPoints[15], wayPoints[12], wayPoints[9],
    wayPoints[6], wayPoints[3], wayPoints[0], wayPoints[1], wayPoints[2],
    wayPoints[8], wayPoints[11], wayPoints[14], wayPoints[17],
    wayPoints[36], wayPoints[37], wayPoints[38], wayPoints[39], wayPoints[40],
    wayPoints[41], wayPoints[47], wayPoints[53], wayPoints[51], wayPoints[50],
    wayPoints[49], wayPoints[48], wayPoints[56], wayPoints[59], wayPoints[62],
    wayPoints[65], wayPoints[68], wayPoints[71], wayPoints[70], wayPoints[67],
    wayPoints[64], wayPoints[61], wayPoints[58], wayPoints[55]
]

export const bluePlayerPath = [
    wayPoints[19], wayPoints[20], wayPoints[21], wayPoints[22], wayPoints[23],
    wayPoints[15], wayPoints[12], wayPoints[9], wayPoints[6], wayPoints[3],
    wayPoints[0], wayPoints[1], wayPoints[2], wayPoints[8],
    wayPoints[11], wayPoints[14], wayPoints[17], wayPoints[36], wayPoints[37],
    wayPoints[38], wayPoints[39], wayPoints[40], wayPoints[41], wayPoints[47],
    wayPoints[53], wayPoints[51], wayPoints[50], wayPoints[49],
    wayPoints[48], wayPoints[56], wayPoints[59], wayPoints[62], wayPoints[65],
    wayPoints[68], wayPoints[71], wayPoints[70], wayPoints[69], wayPoints[63],
    wayPoints[60], wayPoints[57], wayPoints[54], wayPoints[35], wayPoints[34],
    wayPoints[33], wayPoints[32], wayPoints[31], wayPoints[30], wayPoints[24],
    wayPoints[25], wayPoints[26], wayPoints[27], wayPoints[28], wayPoints[29]
]

// Determining all type of player`s startin areas
export const bluePlayerStartAreaRings = [
    startAreaPlayerRingsCenters[0], startAreaPlayerRingsCenters[1], 
    startAreaPlayerRingsCenters[2], startAreaPlayerRingsCenters[3]
]

export const yellowPlayerStartAreaRings = [
    startAreaPlayerRingsCenters[4], startAreaPlayerRingsCenters[5], 
    startAreaPlayerRingsCenters[6], startAreaPlayerRingsCenters[7]
]

export const redPlayerStartAreaRings = [
    startAreaPlayerRingsCenters[8], startAreaPlayerRingsCenters[9], 
    startAreaPlayerRingsCenters[10], startAreaPlayerRingsCenters[11]
]

export const greenPlayerStartAreaRings = [
    startAreaPlayerRingsCenters[12], startAreaPlayerRingsCenters[13], 
    startAreaPlayerRingsCenters[14], startAreaPlayerRingsCenters[15]
]

function getPlayerStartAreaRingColor(playerHomeRing) {
    if (playerHomeRing.className.includes('green-player-start-area-player-ring')) {
        return 'green'
    }
    else if (playerHomeRing.className.includes('blue-player-start-area-player-ring')) {
        return 'blue'
    }
    else if (playerHomeRing.className.includes('yellow-player-start-area-player-ring')) {
        return 'yellow'
    }
    else if (playerHomeRing.className.includes('red-player-start-area-player-ring')) {
        return 'red'
    }
}

// Show indexed waypoint on the board
wayPoints.forEach(waypoint => {
    const {boardSquare, x, y, wayPointIndex} = waypoint
    const test = document.createElement('div')
    test.innerText = wayPointIndex

    test.style.top = y + 'px'
    test.style.left = x + 'px'
    boardSquare.append(test)
})