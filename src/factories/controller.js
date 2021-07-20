import Player from './player';

const Controller = (() => {
    const player1 = Player(false);
    const computer = Player(true);
    const players = [player1, computer];

    const getPlayers = () => players;

    const startGame = () => {
        updateBoards();

        
    }

    const updateBoards = () => {
        player1.setOppBoard(computer.sendBoardForOpp());
        computer.setOppBoard(player1.sendBoardForOpp());
    }

    return {
        startGame,
        updateBoards,
        getPlayers,
    }

})();

export default Controller;