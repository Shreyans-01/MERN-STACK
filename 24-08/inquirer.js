const inquirer = require('inquirer')
const idk = require('inquirer')

var questions = [
    {
        type : 'input',
        name : 'name',
        message: "What is your name ? "
    }
]

inquirer.prompt(questions).then(answers =>
    {
        console.log(`hi ${answers['name']}!`)
    })