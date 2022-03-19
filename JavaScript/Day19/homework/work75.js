/**
 * by xennia316
 */

let arr = [1, 2, 3, 4, 15, 15, 6, 2];

let i= 0, j = 0;

let checker = (values) => {
    if(values.length >= 2){
        for (i = 1, j = 0; i < values.length; i++, j++) {
            if (values[j] === values[i]) {
                return true;
            }
            return false;
        }
    }
    return false;
}
console.log(checker(arr));