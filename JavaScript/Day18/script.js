/**
 * by xennia316
 */

for( let i = 0; i <= 9; i++){
    console.log("Hey....!");
}
for( let i = 15; i <= 24; i++){
    console.log("          Hey....!");
}

for(let i = 15; i > 0; i--){
    console.log(i);
}
console.log("Break");
// While loops
let i = 5;
while( i <= 10){
    console.log(i);
    i++;
}
// Accessing objects 
let person = {
    name: "Edwin", age: 12, siblings:{"1": "Ro", "2": "Allen"},
    courses: ["CEF 310","CEF 305"]
}
console.log(person.siblings["1"]);

// Array methods: Looping through an object
let array = [ 1, 2, 3, 4, 5];

array.forEach(num => console.log(num));

// Looping through an object 
let car = {
    color: "red", name: "Benz"
}
for (const prop in car){
    console.log(prop);
    console.log(car[prop]);
}