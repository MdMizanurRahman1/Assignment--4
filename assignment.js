function findingBadData(array) {

    let badDataCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            badDataCount++;
        }
    }
    if (!Array.isArray(array)) {
        return "Error: Input is not an array";
    }
    return badDataCount;

}
const sampleInput = { type: "Fiat", model: "500", color: "white" };
const result = findingBadData(sampleInput);
console.log(result);