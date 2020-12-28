'use strict';

// package to generate a specific id
const generateUniqueId = require('generate-unique-id');

// note Constructor
class Note {
    add(note) {
            const id = generateUniqueId({
                length: 20,
                useLetters: true
            });
            return (typeof note.payload !== "boolean") ? console.log(`Fetching ${note.payload} which has an id of ${id}`) : console.error("unvalid text! Please try again!");
        
    }
    
    execute(note) {
        return note.action === "add" || note.action === "a" ? this.add(note) : console.error("unvalid action! Please try again!");
    }
}




module.exports = Note;