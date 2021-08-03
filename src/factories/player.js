const Gameboard = require('./gameboard');

const Player = (isComp) => {
    const gameboard = Gameboard();
    let oppGameboard;

    const getOwnBoard = () => gameboard.showBoard();

    const isComputer = () => isComp;

    const setOppBoard = (oppBoard) => {
        oppGameboard = oppBoard;
    }

    const sendBoardForOpp = () => {
        return gameboard.boardForOpp();
    }

    const computerPlay = () => {
        if (!isComputer()) {
            throw new Error('Error: Player is not a computer')
        }

        const compPlay = Math.floor(Math.random()* 100);
        if (oppGameboard[compPlay].isHit === true) {
            return computerPlay();
        }

        return compPlay;
    }

    const placeShipRandom = ship => {
        const placement = Math.floor(Math.random()*100);

            let axis = Math.floor(Math.random()*2);
            axis === 0 ? axis = 'x' : axis = 'y';

            try {
                gameboard.placeShip(ship, placement, axis)
            } catch {
                placeShipRandom(ship);
            }
    }

    const computerInit = () => {
        let ships = gameboard.getShips();

        ships.forEach(ship => {
            placeShipRandom(ship);
        })
    }

    const getShips = () => {
        return gameboard.getShips();
    }

    if (isComp) {
        computerInit();
    }

    return {
        getOwnBoard,
        isComputer,
        computerPlay,
        setOppBoard,
        sendBoardForOpp,
        getShips,
        gameboard
    }
};


module.exports = Player;