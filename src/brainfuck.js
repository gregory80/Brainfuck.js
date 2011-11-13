
var Brainfuck = require("./compiler.js");
var textToFuck = require("./textToFuck.js");

module.exports = {
    interpreter:function(data) {
        var bf = new Brainfuck();
        return bf.run(data);
    },
    convertStringSimple:function( str ) {
        return textToFuck.simple( str );
    }

}
function main() {

    process.stdin.resume();
    process.stdin.on("data", function(chunk) {
        console.log( textToFuck( chunk+"" ) );
    });
    process.stdin.on('end', function () {
        process.stdout.write('end');
        process.exit();
    });
    

}
if(require.main === module) {
    main();
}
