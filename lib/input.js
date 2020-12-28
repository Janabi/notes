'use strict';

const minimist = require('minimist');

class Input {

    constructor(){
        const args = minimist(process.argv.slice(2));
    
        console.log('arguments after minimist: ', args);
        this.action = Object.keys(args)[Object.keys(args).length - 1];
        this.payload = Object.values(args)[Object.keys(args).length - 1];
    }

    valid(){
        if (typeof this.payload === "boolean") {
            return false;
        }
        if (this.action === "_" && Array.isArray(this.payload)){ 
            return false;
        } else {
            return true;
        }
    }
    
}

module.exports = Input;
