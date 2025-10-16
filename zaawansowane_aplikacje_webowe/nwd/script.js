"use strict";

const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

function NWD(a, b) {
    while(a !== b) {
        if (a > b) a -= b;
        else b -= a;
    }

    return a; // albo b
}


calculate.addEventListener("click", function() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    result.innerHTML = "NWD(" + a + ", " + b + ") = " + NWD(a, b);
});