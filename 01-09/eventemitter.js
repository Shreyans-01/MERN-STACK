const eventEmitter  = require('events')
const { EventEmitter } = require('stream')

const event = new EventEmitter();

event.on('btn', name=>{
    console.log(`started ${name}`)
})

event.emit('btn', 20)