#!/usr/bin/env node

'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

const MONGOOSE_URI = process.env.MONGOOSE_URI;

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const Input = require('./lib/input');
const Note = require('./lib/notes');

const input = new Input();
const note = new Note();
console.log('--------------------');

async function doExecuting() {
    try {
        await note.execute(input);
        console.log("Done!")
        mongoose.disconnect();

    } catch(err) {
        console.error(err)
        mongoose.disconnect()
    }
}

doExecuting()