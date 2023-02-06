
// Problem number-1 and solution-

function mindGame(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Please Enter a valid Number";
    }
    const calculation = ((((number * 3) + 10) / 2) - 5);
    return calculation;

}

//console.log(mindGame(-34));



// Problem number-2 and solution-


function evenOdd(stringLength) {
    if (typeof stringLength !== 'string') {
        return "Please Enter a String";
    }
    if (stringLength.length % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }

}
//console.log(evenOdd(27));



// Problem number-3 and solution-

function isLGSeven(number1) {
    if (typeof number1 !== 'number') {
        return "Please Enter a valid Number";
    }
    let result1 = number1;
    if (7 > result1) {
        return number1 - 7;
    }
    else {
        return result1 * 2;
    }
}
//console.log(isLGSeven('-15'));





// Problem number-4 and solution-

function findingBadData(array1) {

    if (!Array.isArray(array1)) {
        return "please enter an array";
    }

    let badDataCount = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 0) {
            badDataCount++;
        }
    }

    return badDataCount;

}
//console.log(findingBadData([2, -5, -7, -13]));



// Problem number-5 and solution-

function gemsToDiamond(n1, n2, n3) {

    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number") {
        return "Please Enter a Number";
    }

    const firstGems = 21;
    const secondGems = 32;
    const thirdGems = 43;
    const firstGemsQuantity = firstGems * n1;
    const secondGemsQuantity = secondGems * n2;
    const thirdGemsQuantity = thirdGems * n3;

    const totalDiamond = firstGemsQuantity + secondGemsQuantity + thirdGemsQuantity;

    if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    }

    else {
        return totalDiamond;
    }

}

console.log(gemsToDiamond(1, 1, 1));


