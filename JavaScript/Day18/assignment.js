/**********************************************************************************************************
 * by xennia316
 *********************************************************************************************************/

// Function that compares two numbers and returns the larger one
function greater(a, b) {
    if (a > b) {
        return a;
    }
    else if (a === b) {
        return "Equal";
    }
    else
        return b;
}

let greater2 = () => {
    if (a > b) {
        return a;
    }
    else if (a === b) {
        return "Equal";
    }
    else
        return b;
}

// Odd Even identifier

function oddEven(num){
    if(num % 2 === 0){
        return true;
    }
    else 
        return false;
}

console.log(oddEven(3));

// Function to return type of value 
let type = (param) => {
 return typeof(param);
}

console.log(type(3));
console.log(type("3"));
console.log(type(" "));
console.log(type(""));
console.log(type(null));
console.log(type(true));

//Countdown from 500 to 100
for(let i = 500; i >= 100; i--){
    console.log(i);
}
// 3 for loops to print hey five times

for (let i = 0; i < 1; i++){
    for(let j = 0; j < 1; j++){
        for(let k = 0; k < 5; k++){
            console.log("Hello");
        }
    }
}