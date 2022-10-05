// Set up game loop 
let lastRenderTime = 0
const renderSpeed = 10 // if speed increases, game loops faster;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / renderSpeed) return
    
    lastRenderTime = currentTime
    // console.log('Rendered')
}

window.requestAnimationFrame(main)
