'use strict';

const note = require('../lib/model/notes-collection');

require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');

describe('Note Model', () => {
    it('can create() a new note item', () => {
      let obj = { text: 'food', category: 'life'};
      return note.create(obj)
        .then(result => {
            console.log("result : ", result)
          Object.keys(obj).forEach(key => {
            expect(result[key]).toEqual(obj[key]);
          });
        });
    });

    it('can getAll() the notes in the database', () => {
        return note.getAll()
          .then(result => {
              console.log("result : ", result)
        });
    });

    it('can getOne() of the given category notes', () => {
        return note.getOne("life")
          .then(result => {
              console.log("result : ", result)
        });
    });

    it('can delete() an existing note', () => {
        return note.delete("5fed5ffc6e4797082fb23b2e")
          .then(result => {
              console.log("result : ", result)
        });
    });

    it('can update() an existing note by changing its text', () => {
        return note.delete("5fed5ffc6e4797082fb23b2e", "juice")
          .then(result => {
              console.log("result : ", result)
        });
    });
});