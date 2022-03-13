/**
 * by xennia316
 */

let check, num;

check = (num) => {
    if (num > 0) {
        if (num % 3 === 0)
            return "Multiple of three!";
    }
    else if (num % 7 === 0) {
        return "Multiple of seven";
    }
    else
        return "Not a multiple of three nor seven";
}