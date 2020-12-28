'use strict';

const Input = require('../lib/input');
const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation(()=>{
    return {
        a: "Hello"
    }
});

describe('Input Module', ()=>{
    
    it('Valid() respects url and method', ()=>{
        let notes = new Input();
        expect(notes.valid()).toBeTruthy();
    })

    it('Valid() respects url and method', ()=>{
        let notes = new Input();
        expect(notes.valid()).not.toBeFalsy();
    })
});