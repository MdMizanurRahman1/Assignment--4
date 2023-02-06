function findingBadData(array) {
    let badDataCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

const sampleInput = [-4, -9, -5, -33, -55];
const result = findingBadData(sampleInput);
//console.log(result);


// Problem Number -2
function evenOdd(str) {
    if (typeof str !== 'string') {
        return "Please Enter String";
    }
    if (str.length % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// console.log(evenOdd("chatgpt"));

// Problem Solving 3

function isLGSeven(numbers) {
    if (typeof n !== 'number') {
        return "Please Enter Number";
    }
    let res = numbers;
    if (7 > res) {
        return numbers - 7;
    }
    else {
        return res * 2;
    }
}
// console.log(isLGSeven(6));



function gemsToDiamond(n1, n2, n3) {
    if (typeof n1 && n2 && n3 !== 'number') {
        return "Please Enter Number";
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

 // console.log(gemsToDiamond(100, 5, 1));