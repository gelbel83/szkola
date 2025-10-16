// ====== FUNKCJE WALIDACJI DANYCH WEJSCIOWYCH ======

function isStringBinary(s) {
    return /^[0-1]+$/.test(s);
}

function isStringDecimal(s) {
    return /^\d+$/.test(s);
}

// ^ - początek łańcucha
// [0-1] - albo zero albo jeden
// + - jeden lub więcej wystąpień
// \d - liczba
// $ - koniec wiersza

export {isStringBinary, isStringDecimal};