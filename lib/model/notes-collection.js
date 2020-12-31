'use strict';

const Notes = require('./notes-schema');

class CrudNote {
    async create(option) {
        let note = new Notes(option);
        let savedNote = await note.save();
        return savedNote;
    }

    async getOne(option) {
        let findNote = await Notes.find({category: option});
        return findNote;
    }

    async getAll() {
        let findAll = await Notes.find();
        return findAll;
    }

    async delete(option) {
        let deleteNote = await Notes.deleteOne({_id: option});
        return deleteNote;
    }

    async update(id, option) {
        let updateNote = await Notes.findByIdAndUpdate({_id: id}, {text :option}, {new: true});
        return updateNote;
    }
}

module.exports = new CrudNote();