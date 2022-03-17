/**
 * by xennia316
 */

let number;

function check(number){
    if(number % 13 === 0 || number % 13 === 1){
        return true;
    }
    return false;
}

console.log(check(29));
console.log(check(27));
console.log(check(13));