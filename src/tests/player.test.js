const Player = require('../src/player');

describe('Player object factory', () => {
    it('Returns own gameboard', () => {
        const player = Player();
        expect(player.getOwnBoard()[0].isHit).toBe(false);
    });
    it('Returns whether the player is a computer', () => {
        expect(Player(true).isComputer()).toBe(true);
        expect(Player(false).isComputer()).toBe(false);
    })
    it('Can make a computer play if it is a computer', () => {
        const player1 = Player(true);
        const player2 = Player(false);
        const oppBoard = player2.sendBoardForOpp();

        player1.setOppBoard(oppBoard);
        const play = player1.computerPlay()
        expect(play).toBeGreaterThanOrEqual(0);
        expect(play).toBeLessThanOrEqual(99);
    })
    it('Throws an error if a computer play is attempted when not a computer', () => {
        const player = Player(false);
        expect(() => {player.computerPlay()}).toThrow('Error: Player is not a computer');
    })
    
})