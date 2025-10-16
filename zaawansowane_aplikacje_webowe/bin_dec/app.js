"use strict";

import {binaryToDecimal, decimalToBinary} from "./utilities.js"; 
import { isStringBinary, isStringDecimal } from "./validate.js";

const mode = document.getElementById("mode");
const input = document.getElementById("input");
const result = document.getElementById("result");
const title = document.getElementById("title");
const convert = document.getElementById("convert");

const binToDecPlaceholder = "np. 10110";
const decToBinPlaceholder = "np. 15679";

convert.addEventListener("click", function(event) {
    event.preventDefault();
    result.style.color = "blue";
    
    if (mode.value === "binToDec") {
        if (!isStringBinary(input.value)) {
            result.style.color = "red";
            result.innerText = "Niepoprawny format. W trybie binarnym użyj wyłącznie 0 i 1";
            return;
        } 

        result.innerText = binaryToDecimal(input.value);
    }
    else {
        if (!isStringDecimal(input.value)) {
            result.style.color = "red";
            result.innerText = "Niepoprawny format. W trybie dziesiętnym użyj wyłącznie cyfr 0-9";
            return;
        } 

        result.innerText = decimalToBinary(input.value);
    }
});

mode.addEventListener("change", function() {
    result.innerText = "";
    input.value = "";

    if (mode.value === "binToDec") {
        input.placeholder = binToDecPlaceholder;
        title.innerText = "Liczba binarna: ";
    }
    else {
        input.placeholder = decToBinPlaceholder;
        title.innerText = "Liczba dziesiętna: ";
    } 
});