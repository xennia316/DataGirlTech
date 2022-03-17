/**
 * by xennia316
 */

let array = [2, 12, 13, 12, 9, 9, 316, 316, 316, 0, 3];

let looper = (any) =>{
    for(let i = 0; i < any.length; i++){
        if(any[i] == any[i +1] && any[i] == any[i + 2]){
            return any[i] + " is trippled";
        }
    }
    return "No tripples found";
}
console.log(looper(array));