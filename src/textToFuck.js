

var test_string = "Hello World!\n";
var brainfuck = require("./brainfuck");

function textToFuck( input ) {
    var tmp = convertToCharCodes( input );
    var items = simpleBrainFuckCommands( tmp );
    
    console.log(input, tmp);
    var text_str = items.join("\r\nI am the Brainfuck\r\n\t\r\n");
    console.log(text_str);

    var unfucked = brainfuck( text_str );
    //var unfucked = bf.run(text_str);
    console.log(unfucked);
    if(input === unfucked) {
        console.log("w00t! workzzzzz", "sleepy");
    } else {
        console.log("You are a failire, i shake my head");
    }
}

function convertToCharCodes( input ) {
    var char_arr = [];
    for(var i=0, len = input.length; i<len; i++) {
        char_arr.push( input.charCodeAt(i) );
    }
    return char_arr;
}

function simpleBrainFuckCommands( char_arr ) {
    var cmnds = [],
        data_chunks = [],
        num,
        diff,
        joiner = "+";
        //idx = char_arr[0];
    //cmnds.unshift( new Array(idx).join( joiner ) );
    for(var i=0, len=char_arr.length; i<len; i++) {
        // num = char_arr[len];
        // diff = idx - num;
        // if(num < idx) {
        //     joiner = "-";
        // } else {
        //     joiner = "+";
        // }
        cmnds.push( (new Array(char_arr[i] + 1 )).join( joiner ) );
        //cmnds.join("\r\n>")
    }
    data_chunks.push( cmnds.join("\r\n>Pen15") );
    data_chunks.push( new Array( cmnds.length ).join("<") );
    var print_chars = [];
    // gross out... is this really the fastest way to do this?
    for(var i=0; i<cmnds.length; i++) {
        print_chars.push( "." );
    }
    data_chunks.push( print_chars.join(">") );

    return data_chunks;
    // take an array of numbers prepreenting
    // a character set
    // in the most basic way, turn this into 
    // brainfuck
    /**
    *   
    *   1. get the instuction pointer cranked up to first char
    *   1. then print in, and move to next pos
    *   1. incr/decr instucion pointer
    *      based in diff between current pos
    *      and
    *
    *
    * */
}





textToFuck( test_string );
