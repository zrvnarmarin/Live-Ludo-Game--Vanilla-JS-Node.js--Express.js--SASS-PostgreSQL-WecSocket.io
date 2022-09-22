// Get origin(central) point of any HTML element
export const getElementOriginPoint = (element) => {
    return {
        x: element.clientWidth / 2,
        y: element.clientHeight / 2
    }
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

// Get element position relative to the viewport
export const getPosition = (element) => {
    const {top, bottom, left, right} = element.getBoundingClientRect();
    return {
        left: left,
        top: top,
        bottom: bottom,
        right: right
    };
}