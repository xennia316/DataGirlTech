/**
 * by xennia316
 */

let num1, num2;

let last = (num1, num2) => {
    if (num1 % 10 === num2 % 10) {
        return true;
    }
    return false;
}

console.log(last(21, 11));
console.log((last(21, 26)));
console.log(last(34, 26));