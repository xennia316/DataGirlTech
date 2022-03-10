/**
 * by xennia316
 */
let date = 21;

switch (date) {
    case 1: case 11: case 21:
        console.log(date + "st");
        break;
    case 2: case 22:
        console.log(date + "nd");
        break;
    case 3:
        console.log(date + "rd");
        break;
    default:
        console.log(date + "th");
        break;
}

// Negation
let age = 21;

if (age !== 14) {
    console.log("Wow");
}

// Decisions

let time = "am";
let decision = time == "am" ? "yes" : "no";
console.log(decision);

// Functions 

/*********************************************************************/
// Method 1
/******************************************************************** */
function sayHello(name) {
    console.log("Hello..." + name);
    return "true";
}
sayHello("Sonia");
console.log(sayHello("Yaya"));

/***************************************************************
 * Function to calculate age
 ***************************************************************/

function calcAge(presentYear, birthYear) {
    let age = presentYear - birthYear;
    console.log(age);
    return age;
}
console.log(calcAge(2022, 2003));

/****************************************************************
 * Method 2: Arrow function
 ***************************************************************/

let calcYears = () => console.log("Yes");
calcYears();

// Default parameters for a function
let calcYears2 = (age) => console.log("Yes" + age);
calcYears2();

/*******************************************************
 * Array Methods
 *******************************************************/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array = [2, 4, 6, 8];
// Array length
console.log(arr.length);

// Sorting an array
console.log(arr.sort());

// reverse array
console.log(arr.sort().reverse());

// Inserting elements into an array
arr.push(-1);
arr.unshift(-2);
console.log(arr);

// Removing elements from an array
arr.pop();
arr.shift();
console.log(arr);

// Concatenating arrays
let final = array.concat(arr);
console.log(final);