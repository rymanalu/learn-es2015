/** Rest */
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));

/** Spread */
function multiply(x, y) {
    return x * y;
}

let nums = [2, 3];

console.log(multiply(...nums));
