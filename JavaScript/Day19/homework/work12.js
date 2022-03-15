/**
 * by xennia316
 */

let larger = (a, b) => {

    if(a > 20 &&
       a <= 30 &&
       b > 20 &&
       b <= 30)
       return true;



    // if (a > 20 && a <= 30){
    //     if( b > 20 && b<= 30){
    //         if (a > b){
    //             return " A is bigger";
    //         }
    //         else if( a == b){
    //             return "Equal numbers";
    //         }
    //         else {
    //             return "B is larger";
    //         }
    //     }
    // }
    return false;
}

console.log(larger(10, 40));
console.log(larger(20, 23));
console.log(larger(14, 16));
console.log(larger(17, 13));