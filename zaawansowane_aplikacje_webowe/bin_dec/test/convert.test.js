import { binaryToDecimal, decimalToBinary } from "../src/convert.js";

describe("testowanie funkcji binaryToDecimal", function() {
    test("0", function() {
        const binary = "0";
        const expectedResult = 0;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });

    test("1", function() {
        const binary = "1";
        const expectedResult = 1;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });

    test("10", function() {
        const binary = "10";
        const expectedResult = 2;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });

    test("101", function() {
        const binary = "101";
        const expectedResult = 5;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });

    test("1010", function() {
        const binary = "1010";
        const expectedResult = 10;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });

    test("11111111", function() {
        const binary = "11111111";
        const expectedResult = 255;

        const result = binaryToDecimal(binary);

        expect(result).toBe(expectedResult);
    });
});


describe("testowanie funkcji decimalToBinary", function() {
    test("0", function() {
        const decimal = 0;
        const expectedResult = "0";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });

    test("1", function() {
        const decimal = 1;
        const expectedResult = "1";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });

    test("2", function() {
        const decimal = 2;
        const expectedResult = "10";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });

    test("5", function() {
        const decimal = 5;
        const expectedResult = "101";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });

    test("10", function() {
        const decimal = 10;
        const expectedResult = "1010";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });

    test("255", function() {
        const decimal = 255;
        const expectedResult = "11111111";

        const result = decimalToBinary(decimal);

        expect(result).toBe(expectedResult);
    });
});