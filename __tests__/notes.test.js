'use strict';

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('HTTP Module', ()=> {

    it('fetch() does nothing with invalid options', ()=> {
        const note = new Note();
        note.add({payload: true});
        expect(console.log).not.toHaveBeenCalled();
    });

    it('fetch() logs out result when given options', ()=> {
        const note = new Note();
        note.add({payload: "Hello"});
        expect(console.log).toHaveBeenCalled();
    });

});