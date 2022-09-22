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
export const getElementPositionRelativeToTheViewport = (element) => {
    const {top, bottom, left, right} = element.getBoundingClientRect();
    return {
        left: left,
        top: top,
        bottom: bottom,
        right: right
    };
}

// Output client`s mouse coordinates on console when clicked anywhere in the document`s body
export const outputClientMouseCoordinates = () => {
    document.body.addEventListener('click', (e) => {
        console.log('Position X : ' + e.clientX + ' Position Y : ' + e.clientY)
    })
}