'use strict';

const Input = require('../lib/input');
const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation(()=>{
    return {
        a: "Hello",
        c: "school"
    }
});

describe('Input Module', ()=>{
    
    it('Valid() has a truthy action and payload', ()=>{
        let notes = new Input();
        expect(notes.valid()).toBeTruthy();
    })

    it('Valid() has falsy action and payload', ()=>{
        let notes = new Input();
        expect(notes.valid()).not.toBeFalsy();
    })
});