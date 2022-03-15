/**
 * by xennia316
 */
let a;

function checkNumber(a){
    if ((a - 100) <= 10 || ( a - 200) <= 10){
        return 1;
    }
    return 0;
}

console.log(checkNumber(201));
console.log(checkNumber(100));