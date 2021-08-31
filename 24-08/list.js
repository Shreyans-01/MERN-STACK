const inquirer = require("inquirer")

inquirer.prompt([{
    type: 'list',
    name: 'icecream',
    message: 'Which is better ? ',
    choices: ['mango','vanilla','butterscotch','mint chocochip']
},
]).then(answers=>{
    console.info('Answer: ',answers.icecream);
});