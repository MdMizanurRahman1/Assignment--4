
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