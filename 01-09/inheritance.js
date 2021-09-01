//inheritance cooncept
const EventEmitter = require('events')

var util = require('util')

var Students = function(name){
    this.name = name;
}

util.inherits(Students,EventEmitter);

var std = new Students('Shreyans');

std.on('Info', function(age){
    console.log(std.name + ' Age is '+ age)
})
std.emit('Info', 19)