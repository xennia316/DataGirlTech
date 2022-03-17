/**
 * by xennia316
 */

let x, y;

function comparison(x, y){
    if(x === 5 || y === 5 || (x +y) === 5 || (x - y) === 5){
        return true;
    }
    return "Done";
}
console.log(comparison(3, 2));
console.log(comparison(3, 4));
console.log(comparison(8, 3));
console.log(comparison(2, 3));