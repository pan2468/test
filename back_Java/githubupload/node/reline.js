var readline = require('readline');
var util = require('util');

var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name) => {
    console.log(name);

    RL.setPrompt('${name} how old are you? ');

    RL.prompt();

    RL.on('line', (age) =>{
        if (age < 10) {
            util.log('${name.trim()} because you are ${age} years old, you cannot proceed');
            RL.close();
        } else {
            util.log('${name.trim()} is great that you are ${age} years old, because now you can enjoy');
            RL.close();
        }
    })
});