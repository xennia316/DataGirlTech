/**
 * by xennia316
 */
let num1, num2, num3;

function check_numbers( x , y){
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
        return true;
    }
    else {
        return false;
    }
}

console.log(check_numbers(120, 45));