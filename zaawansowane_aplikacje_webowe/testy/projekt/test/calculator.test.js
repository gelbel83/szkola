// /test/calulator.test.js

import {add, sub, mul, div} from "../src/calculator";

describe("testowanie funkcji add", function() {
    test("liczby naturalne", function() {
        // ARRANGE
        const a = 7;
        const b = 2;
        const res = 9;

        // ACT
        const result = add(a, b);

        // ASSERT
        expect(result).toBe(res);
    });

    test("liczby całkowite ujemne", function() {
        // ARRANGE
        const a = -2;
        const b = -6;
        const res = -8;

        // ACT
        const result = add(a, b);

        // ASSERT
        expect(result).toBe(res);
    });

    test("liczby rzeczywiste", function() {
        // ARRANGE
        const a = 0.1;
        const b = 0.2;
        const res = 0.3;

        // ACT
        const result = add(a, b);

        // ASSERT
        expect(result).toBe(res);
    });
});


