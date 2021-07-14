const Gameboard = require('../src/gameboard')

describe('Gameboard', () => {
    it('Returns an empty game board', () => {
        const board = Gameboard();
        expect(board.showBoard()[0].hit).toBe(false);
        expect(board.showBoard()[99].hit).toBe(false);
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
    })
});