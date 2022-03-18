/**
 * by xennia316
//  */
// let h1 = document.getElementsByTagName('h1');
// let h2 = document.getElementsByClassName('sc');
// let id = document.getElementById('yaya');
// let attr = id.attributes;

// console.log(id);
// console.log(h1,h2);
// console.log(attr[0].name, attr[0].value);

let element = document.getElementsByTagName('h2');

element[0].setAttribute('class', 'make-red');

let tryOut = document.getElementsByClassName('div');

tryOut[0].setAttribute('style', 'color: #0eb;')

function changeColor(){
    tryOut[0].setAttribute('style', 'color: pink;');
    element[0].setAttribute('style', 'padding: 1em');
    element[1].innerText = "Hi and Welcome!";
}