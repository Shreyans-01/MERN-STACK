//process.stdin
//process.stdout
const rereadline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rereadline.question('What is your name ?',name=>{
    console.log(`hi ${name}!`)
    rereadline.close
})