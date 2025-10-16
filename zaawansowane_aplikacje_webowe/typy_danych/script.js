function isAdult(age) {
    return age >= 18;
}

// console.log(isAdult(25));
// console.log(isAdult(13));
// console.log(isAdult(18));

let userTheme = "";
const defaultTheme = "domyslny motyw";

let theme = userTheme || defaultTheme;  

// console.log(theme);

// undefined
// 1 / 0
// Infinity
// -2 / 0
// -Infinity
// Number("123a")
// NaN
// Number("90e-2")
// 0.9
// Number("43px")
// NaN
// parseInt("43px")
// 43
// parseInt("43wdhasdnasdna;whdwhapbpfbafs123Zb fasbnfkabsfpaspkfapsfaps234h1p2k4h1o241olj2b4`1lj2b41olj2b4l")
// 43
// parseInt("s21")
// NaN
// parseInt("21s")
// 21
// let n = 56;
// undefined
// n.toString();
// '56'
// n.toString(2);
// '111000'
// n.toString(3);
// '2002'
// n.toString(10);
// '56'
// n.toString(8);
// '70'
// n.toString(16);
// '38'
// n = 15
// 15
// n.toString(16);
// 'f'