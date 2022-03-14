/**
 * by xennia316
 */
let num1, num2, num3;

function check_numbers( x , y, z){
    if ((x >= 20 && x <= 50) || (y >= 20 && y <= 50) || (z >= 20 && z <= 50)){
        return true;
    }
    else {
        return false;
    }
}

console.log(check_numbers(120, 45));