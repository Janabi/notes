#!/usr/bin/env node

'use strict';

const Input = require('./lib/input');
const Note = require('./lib/notes');

const input = new Input();
const note = new Note();
console.log('--------------------');
note.execute(input);