const shipFactory = (length, type) => {
    // Ship array has number of elements equal to the length of the ship. 0 = not hit, 1 = hit
    let shipArray = [];
    let sunk = false;
    
    // Populates shipArray with 0's
    for (let i=0; i<length; i++) {
        shipArray.push(0);
    };

    const getType = () => type;

    const isSunk = () => sunk;

    // If ship is sunk, it will set the 'sunk' property to true
    const sunkChecker = () => {
        for (let i=0; i<shipArray.length; i++) {
            if (shipArray[i] == 0) return sunk;
        }
        sunk = true;
        return sunk;
    }

    // Takes location (0 - (length - 1)) and applies a hit.
    const hit = (location) => {
        shipArray[location] = 1;
        return sunkChecker();
    }

    

    return {getType, isSunk, hit};
}

module.exports = shipFactory;