

var fs = require("fs");
var brainfuck = require("../src/brainfuck")

var filedata = fs.readFileSync("example_scripts/helloworld.bf");
var data_str  = filedata && filedata + ""
console.log(data_str);
var fucked_output = brainfuck.interpreter(data_str);

if( fucked_output === "Hello World!\n" ) {
    console.log("Successfully fucked: ",fucked_output);

} else {
    console.log("FAILED!")
}
