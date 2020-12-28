'use strict';

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Note Module', ()=> {

    it('add() does nothing with invalid note', ()=> {
        const note = new Note();
        note.add({payload: true});
        expect(console.log).not.toHaveBeenCalled();
    });

    it('add() logs out result when given note', ()=> {
        const note = new Note();
        note.add({payload: "Hello"});
        expect(console.log).toHaveBeenCalled();
    });

});