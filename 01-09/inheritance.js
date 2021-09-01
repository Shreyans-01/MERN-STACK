//inheritance cooncept
const EventEmitter = require('events')

//util module
var util = require('util')

//class
var Students = function(name){
    this.name = name;
}

//arguments class which inherits and objects of eventemitter
util.inherits(Students,EventEmitter);

//object of class 
var std = new Students('Shreyans');

std.on('Info', function(age){
    console.log(std.name + ' Age is '+ age)
})
std.emit('Info', 19)