const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SYMBOLS = {
    '00': '',
    '10': '.',
    '11': '-',
    '**': ' ',
}

function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        result.push(expr.slice(i, i + 10));
    }
    result = result.map(elem => {
    let pair = [];
        for (let i = 0; i < elem.length; i += 2) {
            pair.push(elem.slice(i, i + 2));
        }
        return pair;
        })
    .map(el => el.map(pair => SYMBOLS[pair]))
    .map(el => el.join(''))
    .map(el => {
        if ( el == '     ') { 
            return ' ';}
        else {return MORSE_TABLE[el];}
         })
     .join('');
       return  result;
}

module.exports = {
    decode
}