/**
 * by xennia316
 */

let num1, num2;

function adder(num1, num2) {
    let sum = num1 + num2;
    if (sum > 10 && sum <= 20) {
        return 30;
    }
    return "Done";
}
console.log(adder(10, 6));