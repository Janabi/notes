'use strict';

const Notes = require('./notes-schema');

class CrudNote {
    async saving(option) {
        let note = new Notes(option);
        let savedNote = await note.save();
        return savedNote;
    }

    async queringOne(option) {
        let findNote = await Notes.find({category: option});
        return findNote;
    }

    async queringAll() {
        let findAll = await Notes.find();
        return findAll;
    }

    async deleting(option) {
        let deleteNote = await Notes.deleteOne({_id: option});
        return deleteNote;
    }
}

module.exports = CrudNote;