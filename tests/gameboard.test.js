const { ContextExclusionPlugin } = require('webpack');
const Gameboard = require('../src/gameboard')

describe('Gameboard', () => {
    it('Returns an empty game board', () => {
        const board = Gameboard();
        expect(board.showBoard()[0].isHit).toBe(false);
        expect(board.showBoard()[99].isHit).toBe(false);
        expect(board.showBoard()[100]).toBeUndefined();
    })

    it('Accepts a valid move and reports the result', () => {
        const board = Gameboard();
        expect(board.receiveAttack(3)).toBe('miss');
    });

    it('Rejects an invalid move (outside range)',() => {
        const board = Gameboard();
        expect(() => {
            board.receiveAttack(101)
        }).toThrow('Error: Invalid Move');
    });

    it('Rejects an invalid move (already hit)', () => {
        const board = Gameboard();
        board.receiveAttack(2);
        expect(() => {
            board.receiveAttack(2)
        }).toThrow('Error: Invalid Move');
    });
    it('Creates an array of Ship objects during initialization', () => {
        const board = Gameboard();
        expect(board.getShips()[0].getType()).toBe('Carrier');
    });
    it('Places a ship on the gameboard', () => {
        const boardObj = Gameboard();
        const ship = boardObj.getShips()[0];
        boardObj.placeShip(ship, 4, 'x');
        const board = boardObj.showBoard();
        console.log(board);
        expect(board[3].shipInfo.hasShip).toBe(false);
        expect(board[4].shipInfo.hasShip).toBe(true);
        expect(board[5].shipInfo.hasShip).toBe(true);
        expect(board[6].shipInfo.hasShip).toBe(true);
        expect(board[7].shipInfo.hasShip).toBe(true);
        expect(board[8].shipInfo.hasShip).toBe(true);
        expect(board[9].shipInfo.hasShip).toBe(false);
        board[4].shipInfo.shipObj.hit(1);
        console.log(board[5].shipInfo.shipObj.shipArray)
    });
});