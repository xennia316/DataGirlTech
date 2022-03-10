/**
 * author: xennia316
 */

// Program to evaluate students and assign grades based on their scores.

let grade = 58;

if (grade >= 80) {
    console.log("Excellent!. You have an A grade");
}
else if (grade >= 70 && grade < 80) {
    console.log("Very Good!. You scored a B+");
}
else if (grade >= 60 && grade < 70) {
    console.log("Good. You have a B grade");
}
else if(grade >= 55 && grade < 60){
    console.log("Passed. You acquired a C+");
}
else if(grade >= 50 && grade < 55){
    console.log("Average. You have a C grade");
}
else if(grade >= 40 && grade < 50){
    console.log("Poor. This is a D grade");
}
else 
    console.log("Very poor. You earned an F");