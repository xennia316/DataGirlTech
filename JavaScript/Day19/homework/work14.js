/**
 * by xennia316
 */

let array = [1, 1, 4, 1, 3];

let testArray = [7, 0, 1, 2, 3, 5, 6];

function test(any) {
    for (let i = 0; i < any.length; i++) {
        if (any[i] == 1 && any[i + 1] == 2 && any[i + 2] == 3)
            return 1;
    }
    return 0;
}

console.log(test(array));
console.log(test(testArray));