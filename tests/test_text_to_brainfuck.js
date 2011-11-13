

var brainfuck = require("../src/brainfuck");

var hello_str = "Hello World!\n";
var brainfucked_cmnd_str = brainfuck.convertStringSimple(hello_str);
console.log("Starting", "\r\n", "Lets just use this string:", "\r\n", hello_str);
console.log( "Pure, no frills brainfuck", "\n", brainfucked_cmnd_str );


var brainfucked_out = brainfuck.interpreter( brainfucked_cmnd_str );
if(hello_str === brainfucked_out) {
    console.log("Success!!!");
} else {
    console.log("No its fucked up")
}
