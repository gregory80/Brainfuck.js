
var Brainfuck = require("./compiler.js")
module.exports = function(data) {
    var bf = new Brainfuck();
    return bf.run(data);
}
