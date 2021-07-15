const Ship = require('../src/ships');

describe('Ship factory function', () => {
    it('Returns a ship object', () => {
        const ship = Ship(3, 'Destroyer');
        expect(ship.getType()).toBe('Destroyer');
    })
    it('Returns whether the ship is sunk or not when hit', () => {
        const ship = Ship(3, 'Destroyer');
        expect(ship.hit()).toBe(false);
    })
    it('Shows sunk when the battleship has been sunk', () => {
        const ship = Ship(1, 'Dinghy');
        expect(ship.hit()).toBe(true);
        expect(ship.isSunk()).toBe(true);
    })
});