
// Problem number-1 and solution-

//Function Description: The described function takes a positive number as an input and returns the result. Also if the input is not a positive numbers(negative, string and zero as well), it will return an error message.

function mindGame(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "Please Enter a valid Number";
    }
    const calculation = ((((number * 3) + 10) / 2) - 5);
    return calculation;

}





// Problem number-2 and solution-

//Function Description: This function takes a string input and returns 'even' or 'odd' based on the number of characters in the string. Also if the input is not a string it will return an error message.

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




// Problem number-3 and solution-

//Function Description: This function takes a number as input, calculates the difference between it and 7, and returns either the difference or twice the input value, depending on the conditions.

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






// Problem number-4 and solution-

//Function Description: This function takes a number array as input, counts the number of negative elements, and returns the result, along with an error message if the input is not an array.

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




// Problem number-5 and solution-


//Function Description: The function takes three numbers as parameters, calculates the total number of diamonds obtained by adding all three friends' gems, and returns the result, with an error message if the inputs are not numbers.


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




