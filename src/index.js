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
    ' ': ' ',
};

function decode(expr) {
    // write your solution here
    let pre = [];
    let total = []
    for (let i = 0; i < expr.length; i+=10) {
        pre = pre.concat(expr.slice(i, i+10))
    }
    
    for (let i = 0; i < pre.length; i++) {
        while (pre[i].length < 10) {
            pre[i] = pre[i] + "0"
        }
        if (pre[i] === '**********') {
            pre[i] = " "
        } else {
        pre[i] = pre[i].replaceAll(/10/ig, ".");
        pre[i] = pre[i].replaceAll(/11/ig, "-");
        pre[i] = pre[i].replaceAll(/0/ig, "");
        }
        total.push(MORSE_TABLE[pre[i]])
    }
    

    return total.join('')
}

module.exports = {
    decode
}