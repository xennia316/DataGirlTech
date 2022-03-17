/**
 * by xennia316
 */

let arr = [1, 2, 3, 5, 5, 6];

let i;
let tryOut = (item) => {
    let count;
    for (i = 0; i < item.length; i++) {
        if (item[i] == 5 && item[i + 1] == 5 || item[i + 1] == 6){
            ++count;
        }
        return count;
    }
}
console.log(tryOut(arr));