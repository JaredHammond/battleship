const Ship = require('./ships');

const Gameboard = () => {
    // Declaration of arrays that will contain the gameboard and the ship objects
    let board = [];
    let ships = [];

    // Standard set of battleships. Can be modified as you want.
    const shipSizes = [
        ['Carrier', 5],
        ['Battleship', 4],
        ['Destroyer', 3],
        ['Submarine', 3],
        ['Patrol', 2]
    ]

    // Fills the 'board' and 'ship' arrays with the objects needed for the game to function
    const init = () => {
        for (let i=0; i<100; i++) {
            let info = {
                shipInfo: {
                    hasShip: false,
                    shipObj: null
                },
                isHit: false
            };
            board.push(info);
        };

        shipSizes.forEach(boat => {
            ships.push(createShip(boat));
        });

    }

    const showBoard = () => board;

    const getShips = () => ships;

    const receiveAttack = (move) => {
        if (!board[move] || board[move].isHit) {
            throw new Error('Error: Invalid Move');
        } else if (board[move].hasShip) {
            board[move].isHit = true;
            return 'hit';
        } else {
            board[move].isHit = true;
            return 'miss';
        }
    }

    const createShip = ([shipType, length]) => {
        return Ship(length, shipType);
    }

    // Uses the "bow" of a ship as the initial location, then places ship object in adjacent squares
    // according to length and axis
    const placeShip = (ship, location, axis) => {

        const shipLength = ship.getLength();

        if (!isValidPlacement(shipLength, location, axis)) {
            throw new Error('Error: Invalid Ship Placement');
        }

        if (axis === 'x') {
            for (let i=0; i < shipLength; i++) {
                board[location + i].shipInfo.hasShip = true;
                board[location + i].shipInfo.shipObj = ship;
            }
        }

        if (axis === 'y') {
            for (let i=0; i < shipLength; i++) {
                board[location + (i * 10)].shipInfo.hasShip = true;
                board[location + (i * 10)].shipInfo.shipObj = ship;
            }
        }
    }

    // Returns false if the ship placement will be off the board
    const isValidPlacement = (shipLength, location, axis) => {
        if (axis === 'x') {
            if (location % 10 > (location + shipLength - 1) % 10) {
                return false;
            };
        } else if (axis === 'y') {
            let row = Math.floor(location / 10);

            if (row % 10 > (row + shipLength - 1) % 10) {
                return false;
            }
        }
        return true;
    };

    const allShipsSunk = () => {
        for (const ship of ships) {
            if (ship.isSunk() ===false) {
                return false;
            }
        }
        return true;
    }

    // Gives simplified version of the board for the opponent to use
    const boardForOpp = () => {
        let boardForEnemy = [];

        board.forEach(square => {
            let info = {}
            const {isHit, shipInfo} = square;
            const {hasShip} = shipInfo;

            // If the square hasn't been attacked, it give ship information
            if (isHit) {
                info = {isHit: isHit, hasShip: hasShip}
            } else {
                info = {isHit: isHit, hasShip: false};
            }
            boardForEnemy.push(info);
        })

        return boardForEnemy;
    }

    init();

    return {
        showBoard,
        receiveAttack,
        getShips,
        placeShip,
        allShipsSunk,
        boardForOpp,
    }
}

module.exports = Gameboard;