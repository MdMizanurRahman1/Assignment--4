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


// Problem Solving 3





