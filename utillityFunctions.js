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

// Get origin(central) top and left point of any HTML element
export const getTopAndLeftElementOriginPoint = (element) => {
    let xPos = (element.offsetLeft - element.scrollLeft + element.clientLeft);
    let yPos = (element.offsetTop - element.scrollTop + element.clientTop);

    return {
        x: xPos,
        y: yPos
    };
}