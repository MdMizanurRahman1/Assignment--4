
// Problem number-1 and solution-

function mindGame(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Please Enter Number";
    }
    const calculation = ((((number * 3) + 10) / 2) - 5);
    return calculation;
}

//console.log(mindGame(-34));



