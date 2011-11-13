



// brain fuck does stuff
// +-<>[],.

var not_brainkfuck_commands = /[^+\-\<\>\[\]\,\.]/gmi;
var is_brainfuck_commands = /[+\-\<\>\[\]\,\.]/gmi;

function killNoCommands( input ) {
    return input.replace( not_brainkfuck_commands, "" );
}
function outputActiveChar() {
    this.data_out.push( String.fromCharCode( this.cell[this.data_pntr] ) );
}
function jmp( b_jmp, e_jmp, is_zero ) {
    b_jmp.push(this.instr_pntr-1);
    var jmp_pos = e_jmp.length > 0 && e_jmp.pop() || null;
    if(is_zero) {
        if(this.cell[this.data_pntr] === 0 && jmp_pos !== null) {
            this.instr_pntr = jmp_pos;
            // jmp forward to position
            // after ] in parent string
        }
    } else {
        if(this.cell[this.data_pntr] && jmp_pos !== null) {
            this.instr_pntr = jmp_pos;
            //  jmp back to ]
        }
    }

}

function procCmnds( input ) {
    switch(input) {
        case "<":
            this.data_pntr-=1;
        break;
        case ">":
            this.data_pntr+=1;
        break;

        case ".":
            outputActiveChar.call(this);
        break;

        case "[":
            jmp.call(this, this.lStart, this.lStop, true);
        break;
        case "]":
            jmp.call(this, this.lStop, this.lStart, false);
        break;
        case ",":
            // this cant possibly be correct
            // accept 1 char of input...
            // does that mean I have to move the the item and
            // assign it back to preview cell?
            //          // but I have to interpret
            //          this char
            //          or this is silly
            this.cell[this.data_pntr] = procCmnds.call( this, this.input_commands[++this.instr_pntr] );
        break;
        case "+":
            if( this.data_pntr in this.cell )  {
                this.cell[this.data_pntr] += 1;
            } else {
                this.cell[this.data_pntr] = 1;
            }
        break;
        case "-":
             if( this.data_pntr in this.cell) {
                 this.cell[this.data_pntr] -= 1;
             } else {
                 this.cell[this.data_pntr] = -1;
             }
        break;
    }
    
}

function Brainfuck( opts ) {
    var opts = opts || {};
    this.debug = ("debug" in opts) ? opts.debug : false;

    this.run = function( data_str ) {
        var str = data_str || "";
        var output = killNoCommands( str );
        var out = this.compile( output );
        return out[0].join("");
    }
    this.compile = function(output) {
        this.lStart = [];
        this.input_commands = output;
        this.data_pntr = 0;
        this.cell = [];
        this.data_out = [];
        this.lStop = [];
        this.instr_pntr = 0;
        console.log("Brainfuck.js", "Run the interpreter");
        console.log("processing this data:", this.input_commands);
        while(this.instr_pntr < this.input_commands.length) {
            procCmnds.call( this, this.input_commands[ this.instr_pntr ] );
            if(this.debug) console.log("runs", this.instr_pntr, this.cell, this.data_out);
            this.instr_pntr += 1;

        }
        return [this.data_out, this.cell];
    }

    return this;
}


module.exports = Brainfuck;

