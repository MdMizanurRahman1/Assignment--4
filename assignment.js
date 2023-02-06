function findingBadData(array) {
    if (!Array.isArray(array)) {
        return "Error: Input is not an array";
    }
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
console.log(result);



function gemsToDiamond(n1, n2, n3) {
    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number") {
        return "Please Enter Number";
    }

    const firstGems = 21;
    const secondGems = 32;
    const thirdGems = 43;
    const firstGemsQuantity = firstGems * n1;
    const secondGemsQuantity = secondGems * n2;
    const thirdGemsQuantity = thirdGems * n3;

    const totalDiamond = firstGemsQuantity + secondGemsQuantity + thirdGemsQuantity;

    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
}

console.log(gemsToDiamond(100, 5, 1));
