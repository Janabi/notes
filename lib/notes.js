'use strict';

// package to generate a specific id
const generateUniqueId = require('generate-unique-id');

// note Constructor
function Note() {}

Note.prototype.add = function(note) {
    const id = generateUniqueId({
        length: 20,
        useLetters: true
    });
    return (typeof note.payload !== "boolean") ? console.log(`Fetching ${note.payload} which has an id of ${id}`) : console.log('unvalid text');
}

Note.prototype.execute = function(note) {
    return note.action === "add" || note.action === "a" ? this.add(note) : console.error("unvalid action");
}


module.exports = Note;