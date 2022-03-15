/**
 * by xennia316
 */

let arr = [1, 2, 3];

let newly = (values) => {
    let i = 1, j = 0;
    for (i = 1, j = 0; i < values.length; i++, j++){
        if(values[i] > values[j]){
            return "Ascending order";
        }
        return "Descending order";
    }
}

console.log(newly(arr))