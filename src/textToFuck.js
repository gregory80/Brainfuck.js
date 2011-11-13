

function simpleTextToBrainFuck( input ) {
    var tmp = convertToCharCodes( input );
    var items = simpleBrainFuckCommands( tmp );
    
    //console.log(input, tmp);
    var text_str = items.join("\r\n");
    return text_str;
}

module.exports = {
    simple:simpleTextToBrainFuck,
    optimized:null
};

function convertToCharCodes( input ) {
    var char_arr = [];
    for(var i=0, len = input.length; i<len; i++) {
        char_arr.push( input.charCodeAt(i) );
    }
    return char_arr;
}

function simpleBrainFuckCommands( char_arr ) {
    var cmnds = [],
        data_chunks = [];

    // build a data structure with the cells (grossly literal and flat)
    // lacks poetry, but works
    for(var i=0, len=char_arr.length; i<len; i++) {
        cmnds.push( (new Array(char_arr[i] + 1 )).join( "+" ) );
    }
    data_chunks.push( cmnds.join("\r\n>") );
    data_chunks.push( new Array( cmnds.length ).join("<") );
    var print_chars = [];
    // gross out... is this really the fastest way to do this?
    for(var i=0; i<cmnds.length; i++) {
        print_chars.push( "." );
    }
    data_chunks.push( print_chars.join(">") );

    return data_chunks;
}

