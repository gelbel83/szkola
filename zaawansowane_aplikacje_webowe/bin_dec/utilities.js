function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 1;

    for(let i =  binary.length - 1; i >= 0; i--) {
        if(binary[i] === '1') decimal += power;
        power *= 2;      
    }

    return decimal;
}

function decimalToBinary(decimal) {
    let binary = "";

    while(decimal > 0) {
        if(decimal % 2 === 0) binary = '0' + binary;
        else binary = '1' + binary;

        decimal /= 2;
        decimal = parseInt(decimal);
    }

    return binary;
}

function removeSpaces(s) {
    s.trim();
}

export {binaryToDecimal, decimalToBinary};