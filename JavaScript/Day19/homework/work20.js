/**
 * by xennia316
 */

let positiveNumber;

let func = (positiveNumber) => {
    if(positiveNumber % 3 === 0){
        if(positiveNumber % 7 === 0){
            return false;
        }
        return true;
    }
    else if(positiveNumber % 7 === 0){
        return true;
    }
    return false;
}
console.log(func(21));
console.log(func(14));
console.log(func(6));