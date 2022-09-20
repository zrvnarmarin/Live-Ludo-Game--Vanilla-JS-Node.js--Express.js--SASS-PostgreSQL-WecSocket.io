// Get origin(central) point of any HTML element
export const getElementOriginPoint = (element) => {
    const elementRects = [...element.getClientRects()]
    let elementOriginPoint = {}

    elementRects.forEach(rectElement => {
        const { top, right, bottom, left } = rectElement
        elementOriginPoint = {
            x: (left + right) / 2,
            y: (top + bottom) / 2,
        }
    })

    return elementOriginPoint
}

// re-write this as a window.document function
onclick = function(e){console.log("mouse location:", 'X: ' + e.clientX, 'Y: ' + e.clientY)}
