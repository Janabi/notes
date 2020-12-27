'use strict';

const minimist = require('minimist');

function Input() {
    console.log('Row arguments from CLI ', process.argv);
    console.log(process.argv.slice(2)[0]);

    const args = minimist(process.argv.slice(2));

    console.log('arguments after minimist: ', args);
    this.action = Object.keys(args)[1];
    this.payload = args.add || args.a;

    // returning a new object
    this.obj = new Object();
    this.obj.action = this.action;
    this.obj.payload = this.payload;

    return this.obj;
}



module.exports = Input;