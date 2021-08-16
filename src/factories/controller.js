import Player from './player';

const Controller = () => {
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

    function placementOnHover(id, ship) {
        const location = id;

        const {valid, colorSquares} = this.state.players.player.gameboard.placementHoverSquares(ship, location, this.state.placementPhase.axis)

        let colorSquareObj = {}
        const color = valid ? 'blue' : 'red';

        colorSquares.forEach(square => {
            colorSquareObj[square] = color;
        })

        return colorSquareObj;
    }

    return {
        startGame,
        updateBoards,
        getPlayers,
        nextShip,
        placementOnHover
    }

};

export default Controller;