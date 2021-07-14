const Ship = require('./ships');

const Gameboard = () => {
    let board = [];
    let ships = [];

    const shipSizes = [
        ['Carrier', 5],
        ['Battleship', 4],
        ['Destroyer', 3],
        ['Submarine', 3],
        ['Patrol', 2]
    ]

    const init = () => {
        for (let i=0; i<100; i++) {
            board.push({ship: null, hit: false});
        }
        shipSizes.forEach(boat => {
            ships.push(createShip(boat));
        })

    }

    const showBoard = () => board;

    const getShips = () => ships;

    const receiveAttack = (move) => {
        if (!board[move] || board[move].hit) {
            throw new Error('Error: Invalid Move');
        } else if (board[move].ship) {
            board[move].hit = true;
            return 'hit';
        } else {
            board[move].hit = true;
            return 'miss';
        }
    }

    const createShip = ([shipType, length]) => {
        return Ship(length, shipType);
    }

    const placeShip = (ship, location, axis) => {

    }

    init();

    return {
        showBoard,
        receiveAttack,
        getShips,
    }
}

module.exports = Gameboard;