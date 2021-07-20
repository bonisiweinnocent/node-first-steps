const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

var figlet = require('figlet');
 
figlet('Hello, Xola', function(err, data) {
    if (err) {
        
        return;
    }
    console.log(data)
});