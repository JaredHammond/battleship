const shipFactory = (length, type) => {
    // Ship array has number of elements equal to the length of the ship. 0 = not hit, 1 = hit
    let hitCounter = 0
    let sunk = false;
    
    const getType = () => type;

    const isSunk = () => sunk;

    const getLength = () => length;

    // If ship is sunk, it will set the 'sunk' property to true
    const sunkChecker = () => {
        if (hitCounter < length) {
            return sunk;
        } else {
            sunk = true;
            return sunk;
        }
    }

    // Takes location (0 - (length - 1)) and applies a hit.
    const hit = (location) => {
        hitCounter += 1;
        return sunkChecker();
    }

    

    return {getType, isSunk, hit, getLength};
}

module.exports = shipFactory;