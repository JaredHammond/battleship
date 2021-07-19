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

    return {
        getOwnBoard,
        isComputer,
        computerPlay,
        setOppBoard,
        sendBoardForOpp,
    }
};

module.exports = Player;