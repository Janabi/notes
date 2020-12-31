'use strict';

const minimist = require('minimist');

class Input {

    constructor(){
        const args = minimist(process.argv.slice(2));
        let checkAction = process.argv.slice(2);
        let bool = true;
        console.log(checkAction)
        if (checkAction[0] === '-l' || checkAction[0] === '--list' || checkAction[0] === '-a'||checkAction[0] === '--add'||checkAction[0] === '-d'||checkAction[0] === '--delete'||checkAction[0] === '-u'||checkAction[0] === '--update'){
            bool = true;
            console.log("hello")
        } else if(checkAction.includes('--verbose') || checkAction.length === 0){
            bool = true;
        } else {
            bool = false;
        }
        console.log('arguments after minimist: ', args);
        this.action = bool ? Object.keys(args) : bool;
        console.log(this.action);
        this.text = (args.a || args.add);
        this.changeText = (Object.values(args)[0][0])
        this.category = (args.c || args.category || args.l || args.list);
        this.id = (args.d || args.delete);
        this.update = (args.u || args.update);
    }

    valid(){
        if (typeof this.text === "boolean" || typeof this.action === "boolean") {
            return false;
        } else {
            return true;
        }
    }
    
}

module.exports = Input;
