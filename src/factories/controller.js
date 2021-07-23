import Player from './player';

const Controller = (() => {
    const player1 = Player(false);
    const computer = Player(true);
    const players = [player1, computer];

    let shipQueue = player1.getShips();

    const getPlayers = () => players;

    const startGame = () => {
        updateBoards();
    }

    const updateBoards = () => {
        player1.setOppBoard(computer.sendBoardForOpp());
        computer.setOppBoard(player1.sendBoardForOpp());
    }

    const nextShip = () => {
        return shipQueue.shift();
    }

    return {
        startGame,
        updateBoards,
        getPlayers,
        nextShip,
    }

})();

export default Controller;