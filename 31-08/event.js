var event = require('events')

var eventEmitter = new event.EventEmitter();

eventEmitter.on('click', function(){
    console.log('happens')
});

eventEmitter.emit() 