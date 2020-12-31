'use strict';

// package to generate a specific id
// const generateUniqueId = require('generate-unique-id');
const collection = require("./model/notes-collection");


// note Constructor
class Note {
    async add(note) {
            // const id = generateUniqueId({
            //     length: 20,
            //     useLetters: true
            // });
            if (typeof note.text !== "boolean" && typeof note.category !== "boolean") {
                console.log("The data is added to the database: ",await collection.create(note));
                return collection.create(note) 
            } else {
                return "invalid note!either missing category or text. Please try again!";

            }   
        
    }

    async list(note) {
        if(typeof note.category === "boolean") {
            let arr = await collection.getAll();
            arr.forEach(value=>{
                console.log(value.text);
                console.log(`Category: ${value.category}\tID: ${value._id}`)
                console.log('------------------------------------------------')
            })

        } else {
            let arr = await collection.getOne(note.category);
            arr.forEach(value=>{
                console.log(value.text);
                console.log(`Category: ${value.category}\tID: ${value._id}`)
                console.log('------------------------------------------------')
            })
        }
    }

    async delete(note) {
        await collection.delete(note.id);
        console.log(`The note with the id ${note.id} is DELETED!`)
    }

    async change(note) {
        let changeT = await collection.update(note.update, note.changeText);
        console.log(changeT);
    }
    
    execute(note) {
        if (note.action.includes('a') || note.action.includes('add')) {
            return this.add(note);
        } else if(note.action.includes('l') || note.action.includes('list')) {
            return this.list(note);
        } else if (note.action.includes('d') || note.action.includes('delete')) {
            return this.delete(note);
        } else if (note.action.includes('u') || note.action.includes('update')){
            return this.change(note);
        }else {
            console.error("invalid action! Please try again!");
        }
        
    }
}




module.exports = Note;