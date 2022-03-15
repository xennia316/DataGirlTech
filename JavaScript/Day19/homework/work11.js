/**
 * by xennia316
 */
let a, b;

let checking = (a, b) => {
    if ((a >= 40 && a <= 50) || (a >= 50 && a <= 60)) {
        if ((b >= 40 && b <= 50) || (b >= 50 && b <= 60)) {
            return true;
        }
        return "Almost true";
    }
    else
        return false;
}

console.log(checking(3, 45));
console.log(checking(57, 3));
console.log(checking(45, 50));
console.log(checking(4, 70));