
var Brainfuck = require("./compiler.js");
var textToFuck = require("./textToFuck.js");

module.exports = {
    interpreter:function(data) {
        var bf = new Brainfuck();
        return bf.run(data);
    },
    convertStringSimple:function( str ) {
        return textToFuck( str );
    }

}
