/**
 * by xennia316
 */

let num = document.getElementsByTagName('h1');
let button = document.getElementsByTagName('button');
let count = 0;

function click1(){
    let count2 = parseInt(num[0].innerText);
    num[0].innerText = ++count2;
    let count3 = parseInt(num[1].innerText);
    num[1].innerText = count3 + 5;
    button[0].setAttribute('style', 'padding: 1em');
    num[0].innerHTML = count2 + 5;
}

function click2(){
    num[0].innerHTML = 0;
    num[1].innerHTML = 0;
    button[1].setAttribute('style', 'padding: 1em');
}