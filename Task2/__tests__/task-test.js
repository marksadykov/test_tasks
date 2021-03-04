import myMap from '../task.js'

const currentMap = new myMap([['rthlkj', 1],['wewndkjwne', 5]]);
currentMap.set('setKey', 'setValue');
currentMap.set('setKey2', 'setValue2');
currentMap.set('setKey3', 'setValue3');
currentMap.set('setKey4', 'setValue4');
currentMap.set('setKey5', 'setValue5');
currentMap.set('setKey6', 'setValue6');

describe('Testing myMaps', () => {
    it('check set and get myMaps', () => {
        const output = (
            currentMap.get('setKey')
        );
        expect(output).toEqual('setValue');
    })

    it('check size myMaps', () => {
        const output = (
            currentMap.size()
        );
        expect(output).toEqual(8);
    })

    it('check delete myMaps', () => {
        const output = (
            currentMap.delete('setKey')
        );
        expect(output).toEqual(true);
    })

    it('check delete myMaps', () => {
        const output = (
            currentMap.delete('setKey')
        );
        expect(output).toEqual(false);
    })

    it('check size myMaps', () => {
        const output = (
            currentMap.size()
        );
        expect(output).toEqual(7);
    })

    it('check has myMaps', () => {
        const output = (
            currentMap.has('setKey')
        );
        expect(output).toEqual(false);
    })

    it('check has myMaps', () => {
        const output = (
            currentMap.has('setKey2')
        );
        expect(output).toEqual(true);
    })

    it('check delete myMaps', () => {
        const output = (
            currentMap.delete('rthlkj')
        );
        expect(output).toEqual(true);
    })

    it('check delete myMaps', () => {
        const output = (
            currentMap.delete('wewndkjwne')
        );
        expect(output).toEqual(true);
    })

    it('check size myMaps', () => {
        const output = (
            currentMap.size()
        );
        expect(output).toEqual(5);
    })

    it('check keys myMaps', () => {
        const output = (
            currentMap.keys()
        );
        expect(output).toEqual(['setKey2', 'setKey3','setKey4', 'setKey5', 'setKey6']);
    })

    it('check values myMaps', () => {
        const output = (
            currentMap.values()
        );
        expect(output).toEqual(['setValue2', 'setValue3','setValue4', 'setValue5', 'setValue6']);
    })

    it('check entries myMaps', () => {
        const output = (
            currentMap.entries()
        );
        expect(output).toEqual(
            [
                ['setKey2', 'setValue2'],
                ['setKey3', 'setValue3'],
                ['setKey4', 'setValue4'],
                ['setKey5', 'setValue5'],
                ['setKey6', 'setValue6'],
            ]
        );
    })

    it('check clear myMaps', () => {
        const output = (
            currentMap.clear()
        );
        expect(output).toEqual(undefined);
    })

    it('check size myMaps', () => {
        const output = (
            currentMap.size()
        );
        expect(output).toEqual(0);
    })
});
