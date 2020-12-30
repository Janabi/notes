'use strict';

const Note = require('../lib/notes');
const supergoose = require('supergoose');
const mongoose = require('mongoose');



jest.mock('supergoose');
supergoose.mockImplementation(()=>{
    return {
        text: 'Hello From ASAC',
        category: 'school'
    }
});
jest.spyOn(global.console, 'log');

describe('Note Module', ()=> {

    it('add() does nothing with invalid note', ()=> {
        const note = new Note();
        note.add({text: true, category: true});
        expect(console.log).not.toHaveBeenCalled();
    });

    it('add() logs out result when given note', ()=> {
        const note = new Note();
        note.add({text: 'Hello From ASAC', category: 'school'});
        expect(console.log).toHaveBeenCalled();
    });

});