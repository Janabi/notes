'use strict';

// package to generate a specific id
// const generateUniqueId = require('generate-unique-id');
const CrudNote = require("./model/notes-collection");
let collection = new CrudNote();

// note Constructor
class Note {
    add(note) {
            // const id = generateUniqueId({
            //     length: 20,
            //     useLetters: true
            // });
            if (typeof note.text !== "boolean" && typeof note.category !== "boolean") {
                console.log("The data is added to the database: ",collection.saving(note));
                return collection.saving(note)  
            } else {
                return "invalid note!either missing category or text. Please try again!";

            }   
        
    }

    async list(note) {
        if(typeof note.category === "boolean") {
            let arr = await collection.queringAll();
            arr.forEach(value=>{
                console.log(value.text);
                console.log(`Category: ${value.category}\tID: ${value._id}`)
                console.log('------------------------------------------------')
            })

        } else {
            let arr = await collection.queringOne(note.category);
            arr.forEach(value=>{
                console.log(value.text);
                console.log(`Category: ${value.category}\tID: ${value._id}`)
                console.log('------------------------------------------------')
            })
        }
    }

    async delete(note) {
        await collection.deleting(note.id);
        console.log(`The note with the id ${note.id} is DELETED!`)
    }
    
    execute(note) {
        if (note.action.includes('a' || 'add')) {
            return this.add(note);
        } else if(note.action.includes('l' || 'list')) {
            return this.list(note);
        } else if (note.action.includes('d' || 'delete')) {
            return this.delete(note);
        } else {
            console.error("invalid action! Please try again!");
        }
        
    }
}




module.exports = Note;