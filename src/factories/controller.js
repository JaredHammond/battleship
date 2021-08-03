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

    const placementOnHover = (e) => {
        const location = e.target.id;
        const ship = nextShip();

        const {valid, colorSquares} = this.state.players.player.gameboard.placementHoverSquares(ship, location, this.state.axis)

        let colorSquareObj = {}
        const color = valid ? 'blue' : 'red';

        colorSquares.forEach(square => {
            colorSquareObj.square = 
        })
    }

    return {
        startGame,
        updateBoards,
        getPlayers,
        nextShip,
    }

});

export default Controller;