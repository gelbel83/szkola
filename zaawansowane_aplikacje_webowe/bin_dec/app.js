"use strict"

function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 1;

    for(let i =  binary.length - 1; i >= 0; i--) {
        if(binary[i] === '1') decimal += power;
        power *= 2;      
    }

    return decimal;
}

// console.log(binaryToDecimal("101"));
// console.log(binaryToDecimal("111110"));
// console.log(binaryToDecimal("101001"));

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

// console.log(decimalToBinary(5));
// console.log(decimalToBinary(123));
// console.log(decimalToBinary(90));

let type = document.getElementById("type");
let input = document.getElementById("input");
let result = document.getElementById("result");

// type - typ konwersji e.g. bin na dec albo dec na bin
// input - wartosc wprowadzona przez uzytkownika
// result - przechowuje wynik konwersji 

let binToDecPlaceholder = "np. 10110";
let decToBinPlaceholder = "np. 15679";

addEventListener("submit", function(event) {
    event.preventDefault();

    if (type.value === "binToDec") result.innerText = binaryToDecimal(input.value);
    else result.innerText = decimalToBinary(input.value);
});

addEventListener("reset", function() {
    result.innerText = "";
    input.placeholder = binToDecPlaceholder;

});

type.addEventListener("change", function() {
    result.innerText = "";
    input.value = "";

    if (type.value === "binToDec") input.placeholder = binToDecPlaceholder;
    else input.placeholder = decToBinPlaceholder;
});