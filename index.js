#!/usr/bin/env node

'use strict';

const Add = require('./lib/input');
const Note = require('./lib/notes');

const add = new Add();
const note = new Note();

note.execute(add);