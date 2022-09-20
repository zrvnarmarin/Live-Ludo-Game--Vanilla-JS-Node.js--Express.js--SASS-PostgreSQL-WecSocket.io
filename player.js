function createPlayer() {
    const player = document.createElement('div')
    player.classList.add('player')

    const playerObject = {
        element: player,
        classes: ['player'],
        isSelected: false,
        boardSquare: undefined,
        id: undefined,
    }

    return playerObject
}

document.body.append(createPlayer())