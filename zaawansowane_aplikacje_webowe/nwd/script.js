// Implementacja algorytmu NWD wykorzystująca odejmowanie

// function NWD(a, b) {
//     while (a !== b) {
//         if (a > b) a -= b;
//         else b -= a; 
//     }
    
//    return a; // albo b 
// }

// Implementacja algorytmu NWD wykorzystujący dzielenie

function NWD(a, b) {
    while (a % b !== 0) {
        a = b;
        b = a % b;
    }

    return b;
}

let a = 15;
let b = 5;

console.log("NWD(" + a + ", " + b + ") = " + NWD(a, b));

